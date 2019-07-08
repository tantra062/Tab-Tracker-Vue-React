const fs     = require('fs'),
    path     = require('path'),
    Sequelize= require('sequelize'),
    config   = require('../config/'),
    db       = {}



//connection
const sequelize = new Sequelize( config.db.database , config.db.user, config.db.password, {
    host: config.db.options.host,
    dialect: config.db.options.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // SQLite only
    storage: config.db.options.storage
});

//filestream to automatically read all files on models folder
fs
    //read through current directory
    .readdirSync(__dirname)
    //exclude index.js
    .filter((file) =>
        file !== 'index.js'
    )
    //
    .forEach((file) =>{
        const model = sequelize.import(path.join(__dirname,file))
        db[model.name] = model
    })
    
//connection from sequelize pushed to db
db.sequelize = sequelize
//import sequelize pushed to db
db.Sequelize = Sequelize
module.exports = db