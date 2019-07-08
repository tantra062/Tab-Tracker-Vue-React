const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}


module.exports = {
    // register(req,res){
    //     res.send({
    //         message: `You are now registered ${req.body.email} and your password is ${req.body.password}`
    //     })
    // },
    async logincsrf(req,res){
        try{
            const token = req.session
            console.log(token)
            res.send(token.csrfSecret)
        }catch(err){
            res.status(500).send({
                error: `Internal error.`
            })
        }
    },
    async register(req,res){
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err){
            res.status(400).send({
                error: `This email account is already registered.`
            })
        }
    },
    async login(req,res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                return res.status(403).send({
                    error:`There are no user, named like ${email}!`
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error:`Incorrect password!`
                })
            }
            const userJson = user.toJSON()
            //req.session.user = {...req.session, ...userJson}
            //console.log('FROM LOGIN SESSION', req.session._csrf )
            res.send({
                user:userJson,
                token: jwtSignUser(userJson)
            })
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to log in. ${err}`
            })
        }
    },
    async user(req,res){
        try{
            const user = await User.findAll({
                limit:10
            })
            res.send(user)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the songs. ${err}`
            })
        }
    },
}