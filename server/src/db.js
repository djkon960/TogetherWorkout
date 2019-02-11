var mysql = require('mysql');

const {dbConnection} = require ('../src/config/dbOptions')

var connection = mysql.createPool({
    host: dbConnection.host,
    user: dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.database
});
module.exports = { connection }
