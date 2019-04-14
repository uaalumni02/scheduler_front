import express from 'express';
import ejs from 'ejs';
import axios from 'axios'


const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'))


app.get('/home', (req, res) => {
    return res.render('home')
});

app.get('/service', (req, res) => {
    const requestUrl = 'http://localhost:3000/services/';
    return axios.get(requestUrl)
        .then((response) => {
            const serviceData = response.data
            return res.status(200)
                .render('service/service', { response: serviceData });
        })
        .catch((err) => {
            res.send(err.message);
        });
    
});


app.listen(port, () => console.log('frontend is live'));