const {Bookmark, Song, User} = require('../models')
const _ = require('lodash')

module.exports = {

    //index method
    //findAll returns array[{}]
    //findOne returns an object{}
    async index(req,res){
        try{
            const bookmark = await Bookmark.findAll({
                where: req.query,
                include: {
                    model: Song
                }
            })
            //just to make it only return song.
                .map(bookmark =>bookmark.toJSON())
                .map(bookmark => _.extend(
                    {here: bookmark.id},//create a new object with bookmark.song and bookmark || here is created as value has reference from bookmark.id
                    bookmark.Song,
                    bookmark))
            res.send(bookmark)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the bookmark.`
            })
        }
    },
    async post(req,res){
        try{

        
            const userId = req.user.id
            const {SongId} = req.body

            console.log(req.body, SongId)
            const bookmark = await Bookmark.create({
                SongId: SongId,
                UserId: userId
            })
            if(!bookmark){
                return res.status(403).send({
                    error: `You do not have access to this bookmark`
                })
            }
            bookmarkJSON = bookmark.toJSON()
            res.send(bookmarkJSON)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to Create the Bookmark.`
            })
        }
    },
    async delete(req,res){
        console.log(req.params)
        try{
            const userId = req.user.id;
            const id = req.params.bookmarkId;
            const bookmark = await Bookmark.findOne({
                where:{
                    id: id,
                    UserId: userId
                }
            })
            if(!bookmark){
                return res.status(403).send({
                    error: `You do not have access to this bookmark.`
                })
            }
            await bookmark.destroy()
            res.send(bookmark)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to Delete the bookmark.`
            })
        }
    }
}