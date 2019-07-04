var mysql = require('mysql');
var dotenv = require('dotenv');

// Get params from env file
dotenv.config({path: 'backend/.env'});
var dbHost = process.env.DEBUG_HOST;
var dbUser = process.env.DB_USR;
var dbPassword = process.env.DB_PASSWORD;
var dbName = process.env.DB_NAME;

// Initialize DB connection
console.log('Initializing DB connection...');
var connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName
});
console.log('DB connection established.');

// Test connection
console.log('testing DB connection...');
connection.connect(function(err) {
    if (err) {
        return console.error('ERROR: ' + err.message);
    }
    return console.log('DB connection all good.')
});

process.exit(0);
