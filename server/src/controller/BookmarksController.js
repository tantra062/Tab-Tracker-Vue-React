const { Bookmark, User, Song } = require('../models');
const _ = require('lodash')

module.exports = {
    async index(req, res){
        try{
            const UserId = req.user.id;// coming from the JWT Token
            const {SongId} = req.query;
            const where = {
                UserId: UserId
            }
            if(SongId){
                where.SongId = SongId
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            }).map(bookmark => bookmark.toJSON())
              .map(bookmark => _.extend(
                    {}, 
                    bookmark.Song,
                    bookmark
                ))
            res.send(bookmarks)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to fetch the list of Bookmark.. ${e}`
            })
        }
    },
    async post(req, res){
        try{
            const UserId = req.user.id;//coming from JWT Token
            const {SongId} = req.body;
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: SongId,
                    UserId: UserId
                }
            })
            if(bookmark){
                return res.status(400).send({
                    error: 'You already have this set as a bookmark'
                })
            }
            const newBookmark = await Bookmark.create({
                SongId: SongId,
                UserId: UserId
            })
            res.send(newBookmark)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to post the payload ${e}`
            })
        }
    },
    async delete(req, res){
        try{
            const UserId = req.user.id;//coming from JWT Token
            const {id}= req.params;
            const bookmark = await Bookmark.findOne({
                where:{
                    id: id,
                    UserId: UserId
                }
            })
            if(!bookmark){
                return res.status(403).send({
                    message: 'Cant dont have access to this bookmark.'
                })
            }
            await bookmark.destroy()

            res.send(bookmark)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to post the payload ${e}`
            })
        }
    }
}