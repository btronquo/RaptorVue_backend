
const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const FeaturesController = require('../controllers/FeaturesController')
const ItemsController = require('../controllers/ItemsController')
const ProductsController = require('../controllers/ProductsController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  /**
   * home
   */
  app.get('/', function(req, res) {
    res.send('index of server');
  });

  /**
   * login and register
   */
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  /**
   * features
   */
  app.get('/features',
    FeaturesController.index)
  app.get('/features/:featureId',
    FeaturesController.show)
  app.put('/features/:featureId',
    FeaturesController.put)
  app.post('/features',
    FeaturesController.post)

  /**
   * items 
   */
  app.get('/items',
    ItemsController.index)
  app.get('/items/:itemId',
    ItemsController.show)
  app.put('/items/:itemId',
    ItemsController.put)
  app.post('/items',
    ItemsController.post)

  /**
   * products
   */
  app.get('/products',
    ProductsController.index)
  app.get('/products/:productId',
    ProductsController.show)
  app.put('/products/:productId',
    ProductsController.put)
  app.post('/products',
    ProductsController.post)


}
