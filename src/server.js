import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/search'

const app = express()
const port = process.env.PORT || 3000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/searches'

mongoose.Promise = global.Promise

mongoose.connect(dbUri)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err))

app.use('/api', routes)

app.listen(port)
console.log(`App running at port ${port}`)
