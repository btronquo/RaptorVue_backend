/**
 * @author Boris Tronquoy
 * @version 181108
 * @description Back-end of RaptorVue
 */

const bodyParser = require('body-parser')
const config = require('./config/config')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const { sequelize } = require('./models')
require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server stated on port ${config.port}`)
  })
