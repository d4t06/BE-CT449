const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String },
  email: { type: String},
  phone: {type: String},
  address: {type: String},
  favorite: { type : Boolean},
});

module.exports = mongoose.model('Contact', ContactSchema);
