import express from 'express'
import request from 'request'
import cheerio from 'cheerio'

const router = express.Router()

router.get('/:searchString', (req, res) => {
  request(`https://www.google.pl/search?q=${req.params.searchString}&source=lnms&tbm=isch`, (err, response, body) => {
    if (err) console.log(err)
    var $ = cheerio.load(body)
  })
  console.log(req.params.searchString)
  res.send('elo')
})

module.exports = router
