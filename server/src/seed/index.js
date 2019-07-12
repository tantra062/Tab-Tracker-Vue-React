const {sequelize ,User, History, Bookmark, Song} = require('../models');

const Promise = require('bluebird');
const users = require("./User.json");
const songs = require("./Song.json");
const bookmarks = require("./Bookmark.json");
const histories = require("./History.json");

sequelize.sync({force:true})
    .then(async function(){
        await Promise.all(
            users.map(user =>{
                User.create(user)
            })
        )
        await Promise.all(
            songs.map(song =>{
                Song.create(song)
            })
        )
        await Promise.all(
            bookmarks.map(bookmark =>{
                Bookmark.create(bookmark)
            })
        )
        await Promise.all(
            histories.map(history =>{
                History.create(history)
            })
        )
    })
