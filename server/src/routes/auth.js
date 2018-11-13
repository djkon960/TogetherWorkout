'use strict'

const express = require('express')

const router = express.Router()

const authMethods = require('../methods/authMethods')

const { connection } = require('../db')

router.post('/login', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if (err) {
            res.send({
                success: false,
                error: err
            })
        } else {
            connection.query("select * from user where email = ? ;", [req.body.email], function (err, results, fields) {
                connection.release()
                if (err) {
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    if (results.length === 0) {
                        res.send({
                            success: false,
                            error: "Invalid email or password"
                        })
                    } else {
                        if (authMethods.comparePasswords(req.body.password, results[0].pass)) {
                            authMethods.deleteItemsOnJson(results[0], ["pass"])
                            res.send({
                                success: true,
                                data: results,
                                token: authMethods.createJwtToken(authMethods.createJwtPayload(results[0].email, results[0].id))
                            })
                        } else {
                            res.send({
                                success: false,
                                error: "Invalid email or password"
                            })
                        }
                    }
                }
            })
        }
    })
})

router.post('/signin', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if (err) {
            res.send({
                success: false,
                error: err
            })
        } else {
            if (req.body.password.length >= 6) {
                let userPass = authMethods.encryptPassword(req.body.password)
                let insertionArray = [req.body.email, userPass, req.body.firstname, req.body.lastname, req.body.date, req.body.city]
                connection.query("insert into user (id, email, pass, firstname, lastname, date, city) values (NULL,?,?,?,?,?,?);", insertionArray, function (err, results, fields) {
                    if (err) {
                        res.send({
                            success: false,
                            error: "There is an error. Please try again!"
                        })
                    } else {
                        connection.query('select id from user where email = ?', req.body.email, function (err, results, fields){
                            connection.release()
                            if (err) {
                                res.send({
                                    success: false,
                                    error: "There is an error. Please try again!"
                                })
                            } else {
                                let userId = results[0].id
                                res.send({
                                    success: true,
                                    data: [{
                                        id: userId,
                                        email: req.body.email,
                                        firstname: req.body.firstname,
                                        lastname: req.body.lastname,
                                        date: req.body.date,
                                        city: req.body.city
                                    }],
                                    token: authMethods.createJwtToken(authMethods.createJwtPayload(req.body.email, userId))
                                })
                            }
                        })
                    }
                })
            } else {
                res.send({
                    success: false,
                    error: "The required password length is at least 6 characters"
                })
            }
        }
    })
})

module.exports = router