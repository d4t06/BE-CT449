const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String },
  favorite: { type : Boolean, default: null},
});

module.exports = mongoose.model('Contact', ContactSchema);
