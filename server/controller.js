module.exports = {
  getRandomQuote: (req, res, next) => {
    let db = req.app.get('db')
    db.get_random_quote().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getRandomQuote', error))
  },
  getAllCombos: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_combo().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getAllCombo', error))
  },
  commentCombo: (req, res, next) => {
    let db = req.app.get('db')
    let { content, userId, photoId } = req.body.comment;
    db.comment_combo([content, userId, photoId]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error, originates from qc.commentCombo', error))
  },
  getAllComments: (req, res, next) => {
    let db = req.app.get('db')
    let { photoId } = req.query;
    db.get_all_comments(photoId).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log("Error, originates from controller.getAllComments", error))
  },
  rateCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.rateCombo hit')
  },
  deleteCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.deleteCombo hit')
  },
  postQuote: (req, res, next) => {
    let db = req.app.get('db')
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    let { author, quote, category } = req.body.quoteObj;
    db.post_quote([author, quote, category]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postQuote', error))
  },
  postPhoto: (req, res, next) => {
    let db = req.app.get('db')
    let { url, photographer, portfolio, location, views } = req.body.photoObj;
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    db.post_photo([url, photographer, portfolio, location, views]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postPhoto', error))
  }
}