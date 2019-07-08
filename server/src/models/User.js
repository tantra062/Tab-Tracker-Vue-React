//promise library
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))


//called by hooks on schema
function hashPassword(user, options){
    const saltRounds = 8

    if (!user.changed('password')){
        //if password hasnt changed, return and not do anything.
        return;
    }
    return bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash => {
            console.log(hash)
            user.setDataValue('password', hash)
        })

}

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        email: {
            type: DataType.STRING,
            unique: true
        },
        password: DataType.STRING
    },{
        hooks:{
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })
    try{
        User.prototype.comparePassword = function(password){
            //return bcrypt.compare(password, this.password);
            console.log(`${password}, ${this.password}`)
            return bcrypt.compareSync(password, this.password)
        }
    }catch(err){
        console.log(err)
    }

    return User
}
