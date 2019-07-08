const {
    sequelize, Song, User, Bookmark, History
} = require('../models');

const Promise = require('bluebird');
const songs = require('../seed/song');
const users = require('../seed/user');
const bookmarks = require('../seed/bookmark');
const histories = require('../seed/history');



sequelize.sync({force:true})
    .then(async function(){
        await Promise.all(
            users.map(user =>{
                User.create(user)
            })
        )
        Promise.all(
            songs.map(song =>{
                Song.create(song)
            })
        )
        Promise.all(
            bookmarks.map(bookmark =>{6
                Bookmark.create(bookmark)
            })
        )
        Promise.all(
            histories.map(history =>{
                History.create(history)
            })
        )
    })
