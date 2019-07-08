import Api from '@/services/Api';

export default{
    index(bookmark){
        return Api().get(`bookmarks`, {params:bookmark}
        )
    },
    post(bookmarks){
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