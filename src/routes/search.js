import express from 'express'
import request from 'request'
import Scraper from '../utilities/scraper'
import MImage from '../models/Images'

const router = express.Router()

router.get('/imagesearch/:searchString', (req, res) => {
  request(`http://www.google.co.uk/search?q=${req.params.searchString}&source=lnms&tbm=isch`, (err, response, body) => {
    if (err) res.status(500).send(err)
    var scraper = new Scraper(body)
    var images = scraper.getImageInfo()

    var imagesLength = images.length
    images.forEach((item) => {
      let imageDocument = new MImage(item)
      imageDocument.save((err) => {
        if (err) return console.log(err)
        imagesLength--
        if (imagesLength === 0) {
          res.status(200).send(images)
        }
      })
    })

    // res.send(body)
  })
})

module.exports = router
