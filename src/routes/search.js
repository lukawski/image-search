import express from 'express'
import request from 'request'
import Scraper from '../utilities/scraper'
import MSearchHistory from '../models/SearchHistory'

const router = express.Router()

router.get('/imagesearch/:searchString', (req, res) => {
  var query = req.params.searchString
  request(`http://www.google.co.uk/search?q=${query}&source=lnms&tbm=isch`, (err, response, body) => {
    if (err) res.status(500).send(err)
    var scraper = new Scraper(body)
    var images = scraper.getImageInfo()

    let history = new MSearchHistory({
      query: query,
      when: new Date()
    })
    history.save((err) => {
      if (err) return console.log(err)
      res.status(200).send(images)
    })
  })
})

router.get('/searchhistory', (req, res) => {
  MSearchHistory.find({}, '-_id -__v', (err, docs) => {
    if (err) return console.log(err)
    res.status(200).send(docs)
  })
})

module.exports = router
