const {User} = require('../models')
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
            const isPasswordValid = password === user.password;
            console.log(isPasswordValid)
            if(!isPasswordValid){
                return res.status(403).send({
                    error: `Invalid password.`
                })
            }
            const userJson = user.toJSON();
            res.send({
                user: userJson
            })
        }catch(e){
            res.status(400).send({
                error: e
            })
        }
    },
    async home(req, res){
        res.send({
            message: `HelloWorld`
        })
    }
}