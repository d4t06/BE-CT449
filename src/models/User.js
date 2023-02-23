const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type : Number},
  role_code: { type : String},
});

module.exports = mongoose.model('User', UserSchema);
