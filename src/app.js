import path from 'path';
import express from 'express';
import ejs from 'ejs';
import axios from 'axios'


const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  'views'))
console.log(path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname + '/assets')));


app.get('/', (req, res) => {
  return res.render('home')
});

app.get('/home', (req, res) => res.redirect('/'));

app.get('/ourServices', (req, res) => {
  return res.render('service/ourServices')
});

app.get('/contact', (req, res) => {
  return res.render('service/contact')
});

app.get('/appointment', (req, res) => {
  return res.render('service/logIn')
});
app.get('/showAppointments', (req, res) => {
  return res.render('service/showAppointments')
});

app.get('/service', (req, res) => {

  var requestUrl = 'https://barber-scheduler-api.herokuapp.com/services'

  return axios.get(requestUrl)
    .then((response) => {
      const responseData = response.data;
      return res.status(200)
        .render('service/service', { response: responseData });
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(port, () => console.log('frontend is live'));