const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/thuc_hanh_ct449')
    console.log("connected successful")
  } catch (error) {
    console.log("connect failure") 
  }
})()


