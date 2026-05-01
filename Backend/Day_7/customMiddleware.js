const express = require('express')
const fs = require('fs')
const PORT = 7010

const server= express()

const auth = (req,res,next)=>{
    const auths = req.query.auth;
    console.log('auths', auths)
    if(!auths){
        res.send('Bye you are not authorized')
        console.log('auth middleware, if blockred authorized ')
    }else{
        next()
        console.log('auth middleware, esle block and after next function invoked')
    }
}

server.use(auths)
server.get('/',(req,res)=>{
    console.log('home')
});

server.listen(PORT =>{
    console.log(`server is running on ${PORT}`)
})