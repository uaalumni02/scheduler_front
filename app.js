import express from 'express';
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'))

app.get('/home', (req, res) => {
    return res.render('home')
});

app.listen(port, () => console.log('frontend is live'));