require('dotenv').config();
var mysql = require('mysql');

// Get params from env file
var host = process.env.DEBUG_HOST;
var user = process.env.DB_USR;
var password = process.env.DB_PASSWORD;
var dbname = process.env.DB_NAME;

// Initialize DB connection
console.log('Initializing DB connection...')
var connection = mysql.createConnection({
    host: host,
    user: user,
    password = password,
    database = dbname
});
console.log('DB connection established.');

// Test connection
console.log('testing DB connection...');
connection.connect(function(err) {
    if (err) {
        console.log('Failed to finish DB connection health check.');
        process.exit(1);
    } 
});
console.log('DB connection all good.');

