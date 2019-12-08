const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  //on dev, any requests to the below endpoints on the UI server would be forwarded to localhost:5000 (express server)
  app.use(proxy('/api/v1/', { target: 'http://localhost:4000' }))
}
