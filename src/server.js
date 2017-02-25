import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/searches')
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err))

app.listen(port)
console.log(`App running at port ${port}`)

