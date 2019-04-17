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
    return axios.all([
      axios.get('http://localhost:3000/services/'),
      axios.get('http://localhost:3000/times')
    ])
    .then(axios.spread((service, times) => {
      const allServices = service.data;
      const allTimes = times.data;

      return res.status(200)
        .render('service/service', { times: allTimes, services: allServices })
      // console.log('Services', service.data);
      console.log('Times', times.data);
    }));

});
  

app.listen(port, () => console.log('frontend is live'));