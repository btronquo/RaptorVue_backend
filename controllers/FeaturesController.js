const { Feature } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let features = null
      const search = req.query.search
      if (search) {
        features = await Feature.findAll({
          where: {
            $or: [
              'name', 'version'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        features = await Feature.findAll({
          limit: 10
        })
      }
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch features'
      })
    }
  },
  async show (req, res) {
    try {
      const features = await Feature.findById(req.params.featureId)
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to find by id the feature'
      })
    }
  },
  async post (req, res) {
    try {
      const features = await Feature.create(req.body)
      res.send(features)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create features'
      })
    }
  },
  async put (req, res) {
    try {
      await Feature.update(req.body, {
        where: {
          id: req.params.featureId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update features'
      })
    }
  }
}
