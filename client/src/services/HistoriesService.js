import Api from '@/services/Api';

export default{
    index(history){
        return Api().get(`histories`, {params:history}
        )
    },
    post(histories){
        return Api().post('histories',
            histories
        )
    }
}
//index - /history/                  -   GET All Songs
//create- /history/                  -   POST Song  
//delete- /history/:id/delete        -   DELETE Song
//