const express   = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    morgan      = require('morgan'),
    cookieParser= require('cookie-parser'),
    // session     = require('express-session'),
    config      = require('./config/config'),
    {sequelize} = require('./models');

const app = express();
app.use(cookieParser())
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors({credentials:true, 
    origin:'*'}));
    // origin: function(origin, callback){
    //     if(whitelist.indexOf(origin) !==1){
    //         callback(null, true)
    //     }else{
    //         callback(new Error('Not allowed by CORS'))
    //     }
    // }}));

//session
// app.use(session({
//     name: 'sid',
//     secret: config.session.secret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: config.session.cookieTime
//     }
// }))


require('./passport')

require('./routes')(app )

sequelize.sync({force:false})
    .then(()=>{
        app.listen(config.PORT)
        console.log(`listening to port ${config.PORT}`)
    })
