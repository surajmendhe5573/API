const express= require('express')
const app= express()
const port= 3000

const db= require('../model/db')    // require database
const student1= require('./student1')  // require student1

const bodyParser= require('body-parser')
const student2 = require('./student2')
app.use(bodyParser.json())  // middleware

app.get('/', (req,res)=>{
    res.send("Jai Shree Ram")
})

// student1 data
app.post('/School/student1', async(req,res)=>{
    try {
        const userData= new student1(req.body);
        await userData.save();
        res.json(userData)
    } catch (error) {
       res.json((error)=>{
            res.json('Internal server error', error)
       }) 
    }
});

app.get('/School/student1', async(req,res)=>{
        const data= await student1.find();
        res.json({success: true, data})
})


// student2 data
app.post('/School/student2', async(req,res)=>{
    try {
        const userData= new student2(req.body);
        await userData.save();
        res.json(userData)
    } catch (error) {
        res.json('Internal server error')
    }
});

app.get('/School/student2', async(req,res)=>{
    const data= await student2.find();
    res.json({success: true, data})
})



app.listen(port, ()=>{
    console.log("server is running");
})
