const postgres = require('postgres');
require('dotenv').config();

const sql = postgres(process.env.PG_URL, {
    ssl: 'require'
});

// Create tables
// 1. Create a users table
sql`CREATE TABLE IF NOT EXISTS users (age INTEGER, name TEXT)`.then(res => {
    console.log('users table created');
}).catch(err => {
    console.log(err);
});

// create table task
sql`CREATE TABLE IF NOT EXISTS tasks (name TEXT)`.then(res => {
    console.log('tasks table created');
}).catch(err => {
    console.log(err);
});

module.exports = sql;