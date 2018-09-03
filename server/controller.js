module.exports = {
  getRandomQuote: (req, res, next) => {
    let db = req.app.get('db')
    db.get_random_quote().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from controller.getRandomQuote', error))
  },
  getAllCombos: (req, res, next) => {
    let db = req.app.get('db')
    db.get_all_combo().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from controller.getAllCombos', error))
  },
  commentCombo: (req, res, next) => {
    let db = req.app.get('db')
    let { content, userId, photoId } = req.body.comment;
    db.comment_combo([content, userId, photoId]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error, originates from controller.commentCombo', error))
  },
  getAllComments: (req, res, next) => {
    let db = req.app.get('db')
    let { photoId } = req.query;
    db.get_all_comments(photoId).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log("Error, originates from controller.getAllComments", error))
  },
  getAllFavorites: (req, res, next) => {
    let db = req.app.get('db')
    let { userId } = req.query;
    db.get_all_favorites(userId).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error, originates from controller.getAllFavorites', error))
  },
  addToFavorites: (req, res, next) => {
    let db = req.app.get('db')
    let { userId, photoId, quote, theme } = req.query;
    console.log(req.query);
    db.get_quote_id(quote).then(result => {
      db.add_to_favorites([userId, photoId, result[0].id, theme]).then(result => {
        res.status(200).send(result)
      }).catch(error => console.log("Error, originates from controller.addToFavorites, add_to_favorites.sql", error))
    }).catch(error => console.log("Error, originates from controller.addToFavorites, get_quote_id.sql", error))
  },
  deleteComment: (req, res, next) => {
    let db = req.app.get('db')
    let { commentId, photoId } = req.query;
    console.log('commentid', commentId)
    console.log('photoid', photoId)
    db.delete_comment([commentId, photoId]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log("Error, originates from controller.deleteComment", error))
  },
  postQuote: (req, res, next) => { //
    let db = req.app.get('db')
    let { author, quote, category } = req.body.quoteObj;
    db.post_quote([author, quote, category]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from controller.postQuote', error))
  },
  postPhoto: (req, res, next) => { //
    let db = req.app.get('db')
    let { url, photographer, portfolio, location, views } = req.body.photoObj;
    db.post_photo([url, photographer, portfolio, location, views]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error originating from controller.postPhoto', error))
  }
}