const {History, Song, User} = require('../models')
const _ = require('lodash')

module.exports = {

    //index method
    //findAll returns array[{}]
    //findOne returns an object{}
    async index(req,res){
        try{
            const history = await History.findAll({
                where: req.query,
                include: {
                    model: Song
                }
            })
            //just to make it only return song.
                .map(history =>history.toJSON())
                .map(history => _.extend(
                    {here: history.id},//create a new object with history.song and history || here is created as value has reference from history.id
                    history.Song,
                    history))
            res.send(history)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the history.`
            })
        }
    },
    async post(req,res){
        try{
            const history = await History.create(req.body)
            historyJSON = history.toJSON()
            res.send(historyJSON)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to Create the History.`
            })
        }
    }
}