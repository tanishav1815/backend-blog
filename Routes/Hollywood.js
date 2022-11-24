const express= require('express');
const app = express();
const data3 = require("../Controllers/Hollywood");



const data3Router = express.Router()
data3Router.route('/Hollywood')
.get(data3.HollywoodData)

module.exports=data3Router;