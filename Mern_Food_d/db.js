const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://SimhadriJayachander:116KPZVOevetWqMi@cluster0.uepqsnq.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB connection Successfull')
})

db.on('error', ()=>{
    console.log('mongo db connection failed')
})

module.exports = mongoose