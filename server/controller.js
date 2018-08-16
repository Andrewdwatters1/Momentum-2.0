module.exports = {
  getAllQuotes: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_quotes().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getAllQuotes', error))
  },
  getAllPhotos: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_photos().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getAllPhotos', error))
  },
  getQuote: (req, res, next) => {
    let db = req.app.get('db')
    let { id } = req.params;
    db.get_quote(id).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getQuote', error))
  },
  postQuote: (req, res, next) => {
    let db = req.app.get('db')
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    let { author, quote, category } = req.body.quoteObj;
    db.post_quote([author, quote, category]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postQuote', error))
  },
  getPhoto: (req, res, next) => {
    let db = req.app.get('db')
    let { id } = req.params;
    db.get_photo(id).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getPhoto', error))
  },
  postPhoto: (req, res, next) => {
    let db = req.app.get('db')
    let { url, photographer, portfolio, location, views } = req.body.photoObj;
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    db.post_photo([url, photographer, portfolio, location, views]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postPhoto', error))
  },
  getAllCombos: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_combo().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qs.getAllCombo', error))
  },
  commentCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.commentCombo hit')
  },
  rateCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.rateCombo hit')
  },
  deleteCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.deleteCombo hit')
  }
}