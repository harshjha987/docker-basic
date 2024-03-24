const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message : "Hello from docker"
    })
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})