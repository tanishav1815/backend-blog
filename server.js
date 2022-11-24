const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const data3 = require("./Routes/hollywood")

app.use('/home', data1)
app.use('/hollywood',data3)

app.get('/' ,(req,res)=>{
    res.write("hello");
    res.end()
})

app.listen(process.env.PORT||3000,()=>{
    console.log("server running");
})