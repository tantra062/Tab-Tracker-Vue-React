import Api from './Api';

export default{
    index({token}){
        return Api({token:token}).get(`histories`)
    },
    post({token, SongId}){
        return Api({token:token}).post('histories', {SongId: SongId})
    }
}
//index - /history/                  -   GET All Songs
//create- /history/                  -   POST Song  
//delete- /history/:id/delete        -   DELETE Song
//