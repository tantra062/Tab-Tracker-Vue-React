const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config');

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn:ONE_WEEK
    })
}

module.exports = {
    async register(req, res){
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(e){
            res.status(400).send({
                error: 'This email is already registered.'
            })
        }
    },
    async login(req, res){
        try{
            const {email, password} = req.body;
            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            if(!user){
                return res.status(403).send({
                    error: `The can't find a user with an email of ${email}`
                })
            }
            
            const isPasswordValid = await user.comparePassword(password);
            if(!isPasswordValid){
                return res.status(403).send({
                    error: `Invalid password.`
                })
            }
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }catch(e){
            res.status(500).send({
                error: `Something went wrong while trying to login.`
            })
        }
    },
    async home(req, res){
        res.send({
            message: `HelloWorld`
        })
    }
}