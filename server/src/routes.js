const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/Bookmarkscontroller')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationPolicy.register,
    AuthenticationController.register),
    app.get('/login',
    AuthenticationController.logincsrf)
    app.post('/login', 
    AuthenticationController.login)
    app.get('/user', 
    AuthenticationController.user)

    app.get('/songs/',
    SongsController.index)
    app.post('/songs/',
    SongsController.addNewSongs)
    app.get('/song/:id',
    SongsController.show)
    app.patch('/song/:id/update',
    isAuthenticated,
    SongsController.update)
    app.delete('/song/:id/delete',
    isAuthenticated,
    SongsController.delete)

    app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
    app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
    app.delete('/bookmarks/:bookmarkId/delete',
    isAuthenticated,
    BookmarksController.delete)

    app.get('/histories',
    isAuthenticated,
    HistoriesController.index)
    app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
}

//AUTH
//register  -   /register       -   register        -   POST
//login     -   /login          -   login           -   POST


//SONGS
//index - /songs/               -   Get All Songs   -   GET
//index - /songs/               -   Post new song   -   POST
//show  - /song/:id             -   Get Song        -   GET