const axios = require('axios');

module.exports = {
  currentUser: (req, res) => {
    res.send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  auth: async (req, res) => {
    try {
      let { code } = req.query;
      let db = req.app.get('db');
      let payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTHO_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `https://${req.headers.host}/auth/callback`
      }
      let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
      let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload);
      let accessToken = accessTokenResponse.data.access_token;
      let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`);
      let userInfo = userInfoResponse.data;
      let users = await db.findUserByAuthId(userInfo.sub);
      if (users.length) {
        req.session.user = users[0]
        res.redirect('/')
      } else {
        let users = await db.createUser(userInfo)
        req.session.user = users[0]
        res.redirect('/')
      }
      console.log('Authentication good to go!');
    } catch (err) {
      console.log('Error, originates from authCtrl.auth', err)
      res.redirect('/error');
    }
  }
}