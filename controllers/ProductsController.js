const { Product } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let features = null
      const search = req.query.search
      if (search) {
        features = await Product.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        features = await Product.findAll({
          limit: 10
        })
      }
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const features = await Product.findById(req.params.productId)
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const features = await Product.create(req.body)
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.productId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}
