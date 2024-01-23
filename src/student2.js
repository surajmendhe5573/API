const mongoose= require('mongoose')

const student2Schema= new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    rollNo: {
        type: Number,
        required: true,
    },
    cgpa: {
        type: Number,
        required: true
    }
})

const student2= new mongoose.model('student2', student2Schema)
module.exports= student2

// database= School
// collection= student2