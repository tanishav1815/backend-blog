const express= require('express');
const app = express();
const data2 = require("../Controllers/Home");



const data2Router = express.Router()
data2Router.route('/Home')
.get(data2.HomeData)

module.exports=data2Router;