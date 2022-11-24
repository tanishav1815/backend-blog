const express= require('express');
const app = express();
const data4 = require("../Controllers/technology");



const data4Router = express.Router()
data4Router.route('/hollywood')
.get(data4.technologyData)

module.exports=data4Router;