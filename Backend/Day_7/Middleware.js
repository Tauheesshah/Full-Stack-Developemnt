const express = require('express')
const fs = require('fs')

const PORT  = 7011

const server = express()

server.use(express.json())

const Auth =(req,res,next)=>{
    const auth = req.body.auth;
    console.log('auths', auths);

    if(!auths){
        res.send('Bye you are not authorized');
        console.log('auth middleware , if block invoked')
    }
    else{
        next();
        console.log('auth middleware , else block and after next function invoked');
    }
}

server.get ('/',(req,res)=>{
    console.log('home');
    res.send('home')
});

server.post('data',(req,res)=>{
    if(req.url === '/data'){
        let value = req.body;
        const data = fs.readFileSync('./package.json',{encoding:'utf-8'});
        res.status(201).json({msg:'data created ',data})
    }else{
        res.status(404).send('something went wrong')
    }
})

server.use(Auth)
server.use('/std',studentRoutes)

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})