'use strict'

const express = require('express')

const router = express.Router()

const dataMethods = require('../methods/dataMethods')

const { connection } = require('../db')
//////////////////////////////TROVA TUTTI EVENTI//////////////////////////////
router.get('/event', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            connection.query('select * from events', function (err, results, fields){
                connection.release();
                if(err){
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: results
                    })
                }
            })
        }
    })
})
//////////////////////////////TROVA EVENTO PER CITTA//////////////////////////////
router.get('/event', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            connection.query('select * from events where city = ?',req.body.city, function (err, results, fields){
                connection.release();
                if(err){
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: results
                    })
                }
            })
        }
    })
})

//////////////////////////////TROVA EVENTO PER ID//////////////////////////////
router.put('/event', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            connection.query(' select * from events where idCreator = ? ', req.body.id, function (err, results, fields){
                connection.release();
                if(err){
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: results
                    })
                }
            })
        }
    })
})

//////////////////////////////CREA NUOVO EVENTO//////////////////////////////
router.post('/event', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            let insertionArray = [req.body.name, req.body.city, req.body.date, req.body.activity, req.body.description, req.body.idCreator]
            connection.query('insert into events (id, name, city, date, activity, description, idCreator) values (NULL, ?, ?, ?, ?, ?, ?)', insertionArray, function (err, results, fields){
                connection.release();
                if (err) {
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: "Event created successfully"
                    })
                }
            })
        }
    })
})

//////////////////////////////TROVA DATI UTENTI//////////////////////////////
router.get('/userprofile', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            connection.query('select * from user', function (err, results, fields){
                connection.release();
                if(err){
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: results
                    })
                }
            })
        }
    })
})

//////////////////////////////TROVA DATI di un utente//////////////////////////////
router.put('/userprofile', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            connection.query('select * from user where id = ?', req.body.id,function (err, results, fields){
                connection.release();
                if(err){
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: results
                    })
                }
            })
        }
    })
})

//////////////////////////////set height weight//////////////////////////////
router.post('/userprofile', async (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err){
            res.send({
                success: false,
                error: error
            })
        } else {
            let insertionArray = [req.body.height, req.body.weight, req.body.id]
            connection.query('update user set height = ?, weight = ? where id = ?', insertionArray, function (err, results, fields){
                connection.release();
                if (err) {
                    res.send({
                        success: false,
                        error: err
                    })
                } else {
                    res.send({
                        success: true,
                        data: "update created successfully"
                    })
                }
            })
        }
    })
})


module.exports = router