module.exports = {
    port : 8081,
    session_secret : 'keyboard warrior cat',
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        options: {
            dialect: process.env.DB_DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.myql'
        }
    }
}