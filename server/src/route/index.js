const AuthenticationController = require('../controller/AuthenticationController')
module.exports = (app)=>{
    app.get('/', AuthenticationController.home)
    app.get('/register', AuthenticationController.register)
}