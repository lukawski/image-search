import express from 'express'
import request from 'request'
import cheerio from 'cheerio'

const router = express.Router()

router.get('/:searchString', (req, res) => {
  request(`https://www.google.pl/search?q=${req.params.searchString}&source=lnms&tbm=isch`, (err, response, body) => {
    if (err) console.log(err)
    var $ = cheerio.load(body)
    console.log($('.images_table').children().text())
    $('.images_table').children().each(function (i, item) {
      $(this).children('td').each(function (i, item) {
        console.log($(this).children('a').children('img').attr('src'))
      })
      console.log('elo')
    })
    res.send(body)
  })
  //res.send('elo')
})

module.exports = router
