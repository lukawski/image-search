import mongoose from 'mongoose'

const SearchHistorySchema = new mongoose.Schema({
  query: String,
  when: Date
})

export default mongoose.model('SearchHistory', SearchHistorySchema)
