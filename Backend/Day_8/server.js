const express = require('express')
const cors = require('cors')

const PORT = 7090;
const server = express()

server.use(
    cors({
        origin:['*','https://127.0.0.1:5500'],
        methods:'GET',
        // optionsSuccessStatus:201
    }),
),

server.get('/',(req,res)=>{
    res.send('hello')
})

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})