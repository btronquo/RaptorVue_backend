/**
 * @author Boris Tronquoy
 * @version 181108
 * @description Back-end of RaptorVue
 */

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const { sequelize } = require('./models')
require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/index')(app)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT)
    console.log(` ✅ Server started on port ${process.env.PORT}`)
  })
