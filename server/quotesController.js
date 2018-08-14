module.exports = {
  getAllQuotes: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_quotes().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getAllQuotes', error))
  },
  getAllImages: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_images().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getAllImages', error))
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
    let { quote, author } = req.body;
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    db.post_quote(quote, author, user).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postQuote', error))
  },
  getImage: (req, res, next) => {
    let db = req.app.get('db')
    let { id } = req.params;
    db.get_image(id).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.getImage', error))
  },
  postImage: (req, res, next) => {
    let db = req.app.get('db')
    let { img, author } = req.body;
    let { user } = req.body; // THIS WILL BE REQ.SESSION.USER
    db.post_image(img, author, user).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qc.postImage', error))
  },
  getAllCombo: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_combo([quote_id, image_id]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from qs.displayCombo', error))
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