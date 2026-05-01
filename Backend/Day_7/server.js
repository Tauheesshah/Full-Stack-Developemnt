const express = require('express')
const fs = require('fs')

const auth = (req,res,next)=>{
    const auth = true;
    if(!auth){
        res.send('Bye you are not authorized')
        console.log('auth middleware, if blockred authorized ')
    }else{
        next()
        console.log('auth middleware, esle block and after next function invoked')
    }
}

server.use(auth)
server.get('/',(req,res)=>{
    console.log('home');
    res.send('home')
})

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})