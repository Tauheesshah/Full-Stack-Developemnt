const express = require('express')

const studentRoutes = express.Router();

studentRoutes.get('/',(req,res)=>{
    res.send('student home Page')
})
studentRoutes.get('/allData',(req,res)=>{
    res.send('student all Data')
})
studentRoutes.get('/student_boy',(req,res)=>{
    res.send(' only boy student Names....')
})

module.exports={studentRoutes}