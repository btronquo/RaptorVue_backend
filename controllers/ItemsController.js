const { Item } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let items = null
      const search = req.query.search
      if (search) {
        items = await Item.findAll({
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
        items = await Item.findAll({
          limit: 10
        })
      }
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch items'
      })
    }
  },
  async show (req, res) {
    try {
      const items = await Item.findById(req.params.itemId)
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to find by id the item'
      })
    }
  },
  async post (req, res) {
    try {
      const items = await Item.create(req.body)
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create items'
      })
    }
  },
  async put (req, res) {
    try {
      await Item.update(req.body, {
        where: {
          id: req.params.itemId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update items'
      })
    }
  }
}
