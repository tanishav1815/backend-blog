const express= require('express');
const app = express();
const data6 = require("../Controllers/food");



const data6Router = express.Router()
data6Router.route('/food')
.get(data6.foodData)

module.exports=data6Router;