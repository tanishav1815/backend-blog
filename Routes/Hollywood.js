const express= require('express');
const app = express();
const data3 = require("../Controllers/hollywood");



const data3Router = express.Router()
data3Router.route('/hollywood')
.get(data3.hollywoodData)

module.exports=data3Router;