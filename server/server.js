const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');
// const path = require('path')

const app = express();
const serverPort = process.env.SERVER_PORT;
const controller = require('./controller');
const ac = require('./authCtrl');

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database is linked! ');
})

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))
// app.use(express.static(`${__dirname}/../build`))

app.get('/auth/callback', ac.auth); //
app.get(`/api/currentUser`, ac.currentUser); //
app.get('/api/logout', ac.logout); //
app.get('/api/quote', controller.getRandomQuote); //
app.post(`/api/quote`, controller.postQuote);
app.post('/api/photo', controller.postPhoto);
app.get('/api/combo', controller.getAllCombos); //
app.get('/api/comments', controller.getAllComments); //
app.post('/api/comment', controller.commentCombo); //
// app.put('/api/combo', qc.rateCombo);
app.delete('/api/comment', controller.deleteComment);

// app.get('/api/weather', wc.getWeather);

// DEFINE ENDPTS


// app.get('/*', function(req, res) { // ******This is only used w/ express static
//   res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.listen(serverPort, () => {
  console.log('We are live boys and girls! Port: ', serverPort);
})
// LISTEN ON DEFINED PORT => RUN NODE/NODEMON TO SERVE UP FROM BACKEND