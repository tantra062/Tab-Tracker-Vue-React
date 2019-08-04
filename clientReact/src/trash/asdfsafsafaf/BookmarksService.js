import Api from './Api';

export default{
    index({SongId, token}){
        return Api({token:token}).get(`bookmarks`, {params: {SongId:SongId}})
    },
    post({token, SongId}){
        return Api({token:token}).post('bookmarks', {SongId:SongId})
    },
    delet({token,id}){
        return Api({token:token}).delete(`bookmarks/${id}/delete`)
    }
}
//index - /bookmark/                  -   GET All Songs
//create- /bookmark/                  -   POST Song  
//delete- /bookmark/:id/delete        -   DELETE Song
//


