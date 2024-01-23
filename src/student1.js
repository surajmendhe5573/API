const mongoose= require('mongoose')

const student1Schema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    }
})

const student1= new mongoose.model('student1', student1Schema)
module.exports= student1

// database= School
// collection= student1