const Joi = require('@hapi/joi');

module.exports = {
    
    register(req, res, next){
        try{
            const schema = Joi.object().keys({
                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
                email: Joi.string().email({ minDomainSegments: 2 })
            });

            const {error, value} = Joi.validate(req.body, schema)
            console.log(value)

            if(error){
                switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: `You must provide a valid email address.`
                    })
                    break
                    //password error handling still off.
                case 'password':
                    res.status(400).send({
                        error: `Password must not contain special Characters.`
                    })
                    break
                default: 
                    res.status(200).send({
                        error: `Something went wrong! ${error}`
                    })
                }
            }else{
                next()
            }
        }catch(e){
            console.log(e)
        }
    }
}