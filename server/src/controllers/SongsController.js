const {Song} = require('../models')

module.exports = {

    //index method
    async index(req,res){
        try{
            let songs = null;
            const search = req.query.search;
            console.log(search)
            if (search){
                songs = await Song.findAll({
                    where:{
                        $or: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            }else{
                songs = await Song.findAll({
                    limit:10
                })
            }
            res.send(songs)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the songs. ${err}`
            })
        }
    },
    async show(req,res){
        try{
            const song = await Song.findByPk(req.params.id)
            res.send(song)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the songs. ${err}`
            })
        }
    },
    async addNewSongs(req,res){
        try{
            const song = await Song.create(req.body)
            res.send(song.toJSON())
        }catch(err){
            res.status(400).send({
                error: `This email account is already registered. ${err}`
            })
        }
    },
    async update(req,res){
        try{
            console.log(req.body)
            console.log(req.params.id)
            const song = await Song.update(req.body,{where: {id: req.params.id}})
            res.send(song)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the songs. ${err}`
            })
        }
    },
    async delete(req,res){
        try{
            const song = await Song.delete(req.params.id)
            res.send(song)
        }catch(err){
            res.status(500).send({
                error: `An error has occured while trying to FETCH the songs. ${err}`
            })
        }
    },
}