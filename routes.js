
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send(
      [{
        title: 'Home Page',
        description: 'Hi, you are on the home page.'
      }]
    )
  })

  app.get('/about', (req, res) => {
    res.send(
      [{
        title: 'About',
        description: 'This is a small recap page'
      }])
  })

  app.get('/contact', (req, res) => {
    res.send(
      [{
        title: 'Contact',
        description: 'Actually you can not contact me. Bad new huh?'
      }])
  })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.get('/*', (req, res) => {
    res.send(
      [{
        title: '404',
        description: 'Not found :( !'
      }])
  })
}
