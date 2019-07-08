const path = require('path')

module.exports = {
    PORT: process.env.PORT || 8081,
    WhistList: ['http://localhost:8082/','http://localhost:8080/'],
    db: { 
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        options:{
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.mysql') 
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    },
    session: {
        sid: 'sid',
        secret: 'somerandomstring',
        cookieTime: 1000*60*60*2
    }
}