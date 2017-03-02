import express from 'express'
import request from 'request'
import Scraper from '../utilities/scraper'

const router = express.Router()

router.get('/:searchString', (req, res) => {
  request(`http://www.google.co.uk/search?q=${req.params.searchString}&source=lnms&tbm=isch`, (err, response, body) => {
    if (err) console.log(err)
    var scraper = new Scraper(body)
    var images = scraper.getSrc()
    res.send(images)
  })
})

module.exports = router
