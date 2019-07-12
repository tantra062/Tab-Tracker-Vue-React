const AuthenticationController = require('../controller/AuthenticationController');
const SongsController = require('../controller/SongsController');
const BookmarksController = require('../controller/BookmarksController');
const HistoriesController = require('../controller/HistoriesController');
const AuthenticationMiddleware = require('../middleware/AuthenticationControllerMiddleware');
const isAuthenticated = require('../middleware/isAuthenticated');


module.exports = (app)=>{
    app.get('/', AuthenticationController.home)
    app.post('/register', AuthenticationMiddleware.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)

    app.get('/songs', SongsController.index)
    app.get('/songs/:id', SongsController.show)
    app.post('/songs', SongsController.post)
    app.put('/song/:id/update', SongsController.put)

    app.get('/bookmarks', isAuthenticated, BookmarksController.index)
    app.post('/bookmarks', isAuthenticated, BookmarksController.post)
    app.delete('/bookmarks/:id/delete', isAuthenticated, BookmarksController.delete)
    
    app.get('/histories', isAuthenticated, HistoriesController.index)
    app.post('/histories', isAuthenticated, HistoriesController.post)

}