const mongoose = require('mongoose');
require('dotenv').config()
const connection = mongoose.connect("mongodb+srv://umamahesh:maheshmongodb123@cluster0.ouvzfui.mongodb.net/fullstackMERNApplication")

// const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = {
    connection
}