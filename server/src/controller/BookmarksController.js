const { Bookmark, User, Song } = require('../models');
const _ = require('lodash')

module.exports = {
    async index(req, res){
        try{
            const {songId, userId} = req.query;
            const where = {
                UserId:userId
            }
            if(songId) {
                where.SongId = songId
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            }).map(bookmark => bookmark.toJSON())
              .map(bookmark => _.extend({
                  bookmarkId:bookmark.id
              }, bookmark.Song))
            res.send(bookmarks)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to fetch the list of Bookmark.. ${e}`
            })
        }
    },
    async post(req, res){
        try{
            const song = await Song.create(req.body)
            res.send(song)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to post the payload`
            })
        }
    }
}