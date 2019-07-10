const {Song} = require('../models');


module.exports = {
    async index(req, res){
        try{
            const songs = await Song.findAll({
                limit:10
            })
            res.send(songs)
        }catch(e){
            res.status(500).send({
                error: 'An error has occured while trying to fetch the list of songs..'
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
    },
    async show(req, res){
        try{
            const song = await Song.findByPk(req.params.id)
            res.send({
                Message:song
            })
        }catch(e){
            res.status(500).send({
                error: `An error has occured while fetching the data.`
            })
        }
    },
    async put(req, res){
        try{
            console.log(req.body)
            console.log(req.params.id)
            const song = await Song.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            res.send(req.body)
        }catch(e){
            res.status(500).send({
                message: `An error has occured while trying to edit.`
            })
        }
    }
}