require('dotenv').config();

const express = require('express');
const app = express();
const port = 1337;

const mysql = require('mysql');
const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

db.connect();


/* REST API ENDPOINTS */
/*
    GET /income
    GET /expenses
    
    POST /add
    POST /remove
    POST /update
*/

app.get('/list', (req, res) => {

    db.query("SELECT * FROM cashflow", (error, results) => {
        console.log(results);
    })

    res.send("hello");
});

app.post('/add', (req, res) => {
    res.send();
})

app.post('/remove', (req, res) => {
    res.send();
})

app.post('/update', (req, res) => {
    res.send();
})




app.listen(port, () => {
    console.log(`Listening on ${port}`)
});