import Api from './Api'

export const bookmarkService = async (type, payload) =>{
    let response = undefined
    switch(type){
    case "index":
        try{
            response = (await Api({token:payload.token}).get(`bookmarks`, {params:{SongId: payload.SongId}})).data
            return { data:response, result: "SUCCESS" }    
        }
        catch(e){
            return { ...e.response.data, result: "ERROR" }
        }
    case "subscribe": 
        try{
            response = (await Api({token:payload.token}).post('bookmarks', {SongId:payload.SongId})).data
            return { data: [response], result: "SUCCESS" }    
        }
        catch(e){
            return { ...e.response.data, result: "ERROR" }
        }
    case "unsubscribe":
        try{
            response = (await Api({token:payload.token}).delete(`bookmarks/${payload.id}/delete`)).data
            return { data:response, result: "SUCCESS" }    
        }
        catch(e){
            return { ...e.response.data, result: "ERROR" }
        }
    default: 
        return
    }
}