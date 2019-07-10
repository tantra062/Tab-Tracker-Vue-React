const AuthenticationController = require('../controller/AuthenticationController');
const AuthenticationMiddleware = require('../middleware/AuthenticationControllerMiddleware');
const SongsController = require('../controller/SongsController');
module.exports = (app)=>{
    app.get('/', AuthenticationController.home)
    app.post('/register', AuthenticationMiddleware.register, AuthenticationController.register)
    app.get('/login', AuthenticationController.login)

    app.get('/songs', SongsController.index)
    app.get('/songs/:id', SongsController.show)
    app.post('/songs', SongsController.post)
    app.put('/song/:id/update', SongsController.put)

}