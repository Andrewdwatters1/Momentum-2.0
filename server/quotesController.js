module.exports = {
  getAllQuotes: (req, res, next) => {
    let db = req.app.get('db')   
    db.get_all_quotes().then(result => {
      res.status(200).send(result)
    }) 
  },
  getAllImages: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.getAllImages hit')
  },
  getQuote: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.getQuotes hit')
  },
  getImage: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.getImage hit')
  },
  displayCombo: (req, res, next) => {
    let db = req.app.get('db')
    res.send('qc.displayCombo hit')
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