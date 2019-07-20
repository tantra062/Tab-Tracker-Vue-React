import Api from './Api';

export default{
    index({UserId, token}){
        return Api({token:token}).get(`bookmarks`, {params:UserId}
        )
    },
    post(bookmarks){
        console.log(bookmarks)

        return Api().post('bookmarks',
            bookmarks
        )
    },
    delet(bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}/delete`)
    }
}
//index - /bookmark/                  -   GET All Songs
//create- /bookmark/                  -   POST Song  
//delete- /bookmark/:id/delete        -   DELETE Song
//


