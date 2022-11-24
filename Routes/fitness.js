const express= require('express');
const app = express();
const data5 = require("../Controllers/fitness");



const data5Router = express.Router()
data5Router.route('/fitness')
.get(data5.fitnessData)

module.exports=data5Router;