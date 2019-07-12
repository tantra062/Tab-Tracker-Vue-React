const fs     = require('fs'),
    path     = require('path'),
    Sequelize= require('sequelize'),
    config   = require('../config/'),
    db       = {}

const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};
    

//connection
const sequelize = new Sequelize( config.db.database , config.db.user, config.db.password, {
    host: config.db.options.host,
    dialect: config.db.options.dialect,
    operatorsAliases,
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
    Object.keys(db).forEach(function(modelName){
        if('associate' in db[modelName]){
            db[modelName].associate(db)
        }
    })
    
//connection from sequelize pushed to db
db.sequelize = sequelize
//import sequelize pushed to db
db.Sequelize = Sequelize
module.exports = db