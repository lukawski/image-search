import cheerio from 'cheerio'

export default class {
  constructor (html) {
    this.$ = cheerio.load(html)
  }

  getImageInfo () {
    var objects = []
    this.$('.images_table').children().each((i, item) => {
      this.$(item).children('td').each((i, item) => objects.push({
        url: this.$(item).children('a').children('img').attr('src'),
        snippet: this.$(item).html().split('<br>')[2].replace(/<(.*?)>/g, '')
      })
      )
    })
    return objects
  }
}
