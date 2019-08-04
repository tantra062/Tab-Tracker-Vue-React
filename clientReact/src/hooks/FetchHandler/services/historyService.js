import Api from './Api'

export const historyService = async (type, payload) =>{
    let response = undefined
    switch(type){
    case "index":
        try{
            response = (await Api({token:payload.token}).get(`histories`)).data
            return { data:response, result: "SUCCESS" }    
        }catch(e){
            return { ...e.response.data, result: "ERROR" }
        }
    case "post": 
        try{
            response = (await Api({token:payload.token}).post('histories', {SongId: payload.SongId})).data
            return { data:response, result: "SUCCESS" }    
        }catch(e){
            return { ...e.response.data, result: "ERROR" }
        }
    default: 
        return
    }
}