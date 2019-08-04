import SongsService from '../../services/SongsService';

export const songSwitch = async (action, payload) =>{
    let response = null
    switch(action){
        case "index":
            response = (await SongsService.index(payload)).data
            return response

        case "show":
            response = (await SongsService.show(payload)).data
            return response
        case "update":
            response = (await SongsService.update(payload)).data
            return response
        default:
            return
    }
}