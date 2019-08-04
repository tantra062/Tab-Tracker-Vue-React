import Api from './Api';

export default{
    index(value){
        return Api(value.token).get('songs/', { params: {search: value.search} })
    },
    create(song){
        return Api().post('songs/', song)
    },
    show({id}){
        return Api().get(`songs/${id}`)
    },
    update({payload, token}){
        return Api().put(`song/${payload.id}/update`, payload)
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