const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/School')

const db= mongoose.connection

db.on('connected', ()=>{
    console.log("Mongodb is connected");
})
db.on('error', (error)=>{
    console.log('Error', error);
})
db.on('disconnected', ()=>{
    console.log('Mongodb is disconnected');
})

module.exports= db

// commit added for testing purpose