const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/backend')
    console.log("connected")
  } catch (error) {
    console.log("connect failure") 
  }
})()


