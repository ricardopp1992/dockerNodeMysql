'use strict'

const http = require('http')
const mysql = require('mysql')

const port = 9000

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'db',
    user: 'root',
    password: '1234',
    database: 'fizzmod'
})

const server = http.createServer((req, res) => {
    const { method, url } = req

    pool.query('SELECT 1 + 1 as sol', (err, row, fields) => {
        if(err) {
            console.log(err)
            return process.exit(22)
        }

        console.log('Solution: ', row[0].sol)
    })
})

server.listen(port, () => {
    console.log(`Listen on port ${port}`)
})