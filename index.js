const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const data2 = require("./Routes/Home")
const data3 = require("./Routes/hollywood")
const data4 = require("./Routes/technology")
const data5 = require("./Routes/fitness")
const data6 = require("./Routes/food")



app.use('/home', data1)
app.use('/home',data2)
app.use('/home',data3)
app.use('/home', data4)
app.use('/home', data5)
app.use('/home', data6)




app.get('/' ,(req,res)=>{
    res.write("hello");
    res.end()
})

app.listen(process.env.PORT||3000,()=>{
    console.log("server running...");
})