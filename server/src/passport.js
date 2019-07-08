const passport = require('passport');
const {User} = require('./models');

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require( 'passport-jwt').ExtractJwt // helper function

const config = require('./config/config')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // This secretOrKey verifies if the jwtfromrequest token is valid
        secretOrKey: config.authentication.jwtSecret 
    }, async function(jwtPayload, done){
        try{
            const user = await User.findOne({
                where: {
                    id: jwtPayload.id
                }
            })
            if (!user){
                return done(new Error(), false)
            }
            return done(null, user)
        }catch(err){
            return done(new Error(), false)
        }
    }),
)

module.exports = null