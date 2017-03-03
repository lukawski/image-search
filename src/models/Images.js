import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
  url: String,
  snippet: String
})

export default mongoose.model('Image', ImageSchema)
