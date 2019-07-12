const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const {sequelize} = require('./models/');
const config = require('./config/');

const app = express();

//parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

require('./passport')

require('./route')(app)

sequelize.sync()
    .then(()=>{
        app.listen(config.port)
        console.log(`Server Started at ${config.port}`)
    })