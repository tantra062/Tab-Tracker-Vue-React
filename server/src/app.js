const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../src/config/');

const app = express();

//parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.listen(process.env.PORT|| config.PORT ,()=>{
    console.log(`Server Started at ${config.PORT}`)
})