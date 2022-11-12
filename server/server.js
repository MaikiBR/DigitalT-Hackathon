// nodemon ./server/server.js
// npx nodemon ./server/server.js

const express=require('express');
const app=express();

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}` )
})