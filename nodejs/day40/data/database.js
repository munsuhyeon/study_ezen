require('dotenv').config() // dotenv패키지는 맨 위 라인에 있어야 한다
const mysql = require('mysql2/promise');
// mysql 로그인 정보(env.js)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

// 작성한 정보를 외부로 보낸다
module.exports = pool;