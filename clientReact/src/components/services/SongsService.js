import Api from './Api';

export default{
    index(value){
        return Api({token:'asdf'}).get('songs/', {
            params:{
                search:value
            }
        })
    },
    create(song){
        return Api().post('songs/', song)
    },
    show(id){
        return Api().get(`songs/${id}`)
    },
    update(song){
        try{
            return Api().put(`song/${song.id}/update`, song)
        }catch(err){
            console.log(err)
        }
    },
    del(song){
        return Api().delete(`song/${song.sid}/delete`)
    }
}
//index - /songs/               -   GET All Songs
//create- /songs/               -   POST Song  
//show  - /song/:id             -   GET Song     
//update- /song/:id/update      -   UPDATE Song
//delete- /song/:id/delete      -   DELETE Song
//