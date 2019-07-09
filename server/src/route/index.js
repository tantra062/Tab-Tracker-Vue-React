const AuthenticationController = require('../controller/AuthenticationController');
const AuthenticationMiddleware = require('../middleware/AuthenticationControllerMiddleware');

module.exports = (app)=>{
    app.get('/', AuthenticationController.home)
    app.post('/register', AuthenticationMiddleware.register, AuthenticationController.register)
    app.get('/login', AuthenticationController.login)

}