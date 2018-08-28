// Submit Quote  => gets 100 random quotes and puts them into DB

axios.get('https://talaikis.com/api/quotes/').then(result => {
  console.log(result)  
  setTimeout(function () {
      for (let i = 0; i < 100; i++) {
        let quoteObj = {
          author: result.data[i].author,
          quote: result.data[i].quote,
          category: result.data[i].cat
        }
        axios.post('/api/quote', { quoteObj }).then(result => {
          console.log('added quote', result.data)
        })
      }
    }, 10)
  })

// Submit Photo => gets random photos per search query and puts into DB

let search = 'sunset'
axios.get(`https://api.unsplash.com/photos/random?client_id=5ed61707f778d0b6915e1cb34046b4a57e1c445bc003d5d11218f347770c3ae4&query=${search}&orientation=squarish&count=30`).then(result => {
  setTimeout(function () {
    for (let i = 0; i < result.data.length; i++) {
      let photoObj = {
        url: result.data[i].urls.regular,
        photographer: result.data[i].user.name,
        portfolio: result.data[i].user.portfolio_url,
        location: result.data[i].location.title
      }
      axios.post('/api/photo', { photoObj }).then(result => {
        console.log('added to db', result.data)
      })
    }
  }, 300)
})