require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        //console.log(results);
        res.send(results);
    });
});

app.post('/add', (req, res) => {
    let amount = 0;

    try {
        amount = parseFloat(req.body.amount).toFixed(2);
    } catch(e) {
        console.log(e);
        res.sendStatus(400);
        return;
    }

    db.query("INSERT INTO cashflow (amount) VALUES (" + amount + ");", (error, results) => {
        const insertId = results.insertId;
        res.send({id: insertId});
        return;
    });
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