const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const { 
    DATABASE_USER, 
    DATABASE_PASSWORD, 
    DATABASE_HOST, 
    DATABASE_DATABASE } = process.env;



const config = {
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    database: DATABASE_DATABASE
};

const pool = mysql.createPool(config);

module.exports = {
    pool
}
