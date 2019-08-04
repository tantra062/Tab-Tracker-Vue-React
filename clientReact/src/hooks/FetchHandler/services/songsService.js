import Api from './Api';

export const songsService = async (action, payload) =>{
    let response = null
    switch(action){
        case "index":
            try{
                response = (await Api(payload.token).get('songs/', { params: {search: payload.search} })).data
                return { data:response, result: "SUCCESS" }    
            }catch(e){
                return { ...e.response.data, result: "ERROR" }
            }
        case "create":
            try{
                response = (await Api(payload.token).get('songs/', payload)).data
                return { data:response, result: "SUCCESS" }
            }catch(e){
                return { ...e.response.data, result: "ERROR" }
            }
        case "show":
            try{
                response = (await Api().get(`songs/${payload.id}`)).data
                return { data:response, result: "SUCCESS" }
            }catch(e){
                return { ...e.response.data, result: "ERROR"}
            }
        case "update":
            try{
                response = (await Api().put(`song/${payload.payload.id}/update`, payload.payload)).data
                return { data:response, result: "SUCCESS" }
            }catch(e){
                return { ...e.response.data, result: "ERROR" }
            }
        default:
            return
    }
}