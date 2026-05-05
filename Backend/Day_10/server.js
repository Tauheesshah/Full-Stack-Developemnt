const express = require('express')
require('dotenv').config();

const {connection,UserModel} = require('./db')

const PORT  = process.env.PORT;
const app = express();

// middleware
app.use(express.json())

//read
app.get('/user', async (req,res)=>{
    let userData =  await UserModel.find()
    res.send({msg: 'data found ✔️', data:userData})
})

//create
app.post('/userCreateOne', async (req,res)=>{
    let value = req.body
    let userData = await UserModel.insertOne(value)
    console.log('userData',userData)
    res.send({msg: 'data Created ✔️', data:userData})
})

//delete
app.post('/userDeleteOne', async (req,res)=>{
    let value = req.body
    let userData = await UserModel.deleteOne(value)
    console.log('userData',userData)
    res.send({msg: 'data Created ✔️', data:userData})
})







app.listen(PORT,async()=>{
    try {
        console.log('DB is Connected ✔️')
    } catch (error) {
        console.log(error)
        console.log('DB is disconnected ❌')
    } finally{
        console.log(`server is running on ${PORT}`)
    }
})