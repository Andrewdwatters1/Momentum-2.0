const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');
// const path = require('path')

const app = express();
const serverPort = process.env.SERVER_PORT;
const qc = require('./quotesController');
const wc = require('./weatherController');


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

app.get('/api/quotes', qc.getAllQuotes);
app.get('/api/images', qc.getAllImages);
app.get('/api/quotes/:id', qc.getQuote);
app.post(`/api/quotes`, qc.postQuote);
app.get('/api/images/:id', qc.getImage);
app.post('/api/images', qc.postImage);
// app.get('/api/combo', qc.displayCombo);
// app.post('/api/combo', qc.commentCombo);
// app.put('/api/combo', qc.rateCombo);
// app.delete('/api/combo', qc.deleteCombo);

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