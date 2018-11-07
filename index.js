/**
 * @author Boris Tronquoy
 * @version 181108
 * @description Back-end of RaptorVue
 */

 // express body-parser morgan cors
const bodyParser = require('body-parser'),
      cors       = require('cors'),
      express    = require('express'),
      morgan     = require('morgan');

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send({
        message: `Yes, this is the futur home page`
    })
})

app.listen(process.env.PORT || 8081)




