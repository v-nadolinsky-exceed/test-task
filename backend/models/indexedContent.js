const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexedSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  indexedContent: {
    h1: {
      type: Array,
      required: true
    },
    h2: {
      type: Array,
      required: true
    },
    h3: {
      type: Array,
      required: true
    },
    link: {
      type: Array,
      required: true
    }
  }
})

const IndexedModel = mongoose.model('indexedModel', indexedSchema);

module.exports = IndexedModel;