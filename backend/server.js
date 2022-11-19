let express = require('express')
let request = require('request')
let querystring = require('querystring')
var cors = require('cors')

let app = express()
app.use(cors());

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

let client_id = 
process.env.SPOTIFY_CLIENT_ID || 
'clientId TUTAJ'

let frontend_uri = 
process.env.FRONTEND_URI || 
'http://localhost:4200'

app.get('/login',  function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: 'user-read-private user-read-email user-read-recently-played user-read-playback-state user-modify-playback-state streaming playlist-modify-public',
      redirect_uri
    }))
})

app.get('/callback',  function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        client_id + ':' + 'secret TUTAJ'
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = frontend_uri
    res.redirect(uri + '?access_token=' + access_token)
  })
})

// app.get('/delete', function(req, res) {
// let delOptions = {
//   url: 'https://api.spotify.com/v1/playlists/1WIp4xREtWmZgjVIYSiOyY/tracks',
//   headers: {
//     'authorization': 'Bearer ' + 'asdads',
//     'asd': 'asdasddasdas'
//   }
// }
// console.log(req.headers['authorization'])
//   request.delete(delOptions, function(error, response, body) {
//     console.log('TEST')
//   })
// })

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)