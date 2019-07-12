const { History, User, Song } = require('../models');
const _ = require('lodash')

module.exports = {
    async index(req, res){
        try{            
            const {UserId} = req.query;//coming from JWT Token
            const histories = await History.findAll({
                where:{
                    UserId: UserId
                },
                include:[
                    {
                        model: Song
                    }
                ]
            })
            .map(history => history.toJSON())
            .map(history => _.extend({
                historyId:history.id
            }, history.Song))
            res.send(histories)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to fetch the list of history.. ${e}`
            })
        }
    },
    async post(req, res){
        try{
            const UserId = req.user.id;//coming from JWT Token
            const {SongId} = req.body
            const history = await History.create({
                SongId: SongId,
                UserId: UserId
            })
            res.send(history)
        }catch(e){
            res.status(500).send({
                error: `An error has occured while trying to post the payload`
            })
        }
    }
}