import Api from '@/services/Api';

export default{
    index(value){
        return Api().get('songs/',{
            params:{
                search:value
            }
        })
    },
    create(song){
        return Api().post('songs/', song)
    },
    show(id){
        return Api().get(`song/${id}`)
    },
    update(song){
        try{
            return Api().patch(`song/${song.id}/update`, song)
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