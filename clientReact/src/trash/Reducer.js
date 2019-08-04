import SongService from '../services/SongsService';

export const SONGS_LIST = 'SONGS_LIST';
export const SONG_SEARCH = 'SONG_SEARCH';
export const SONG_UPDATE = 'SONG_UPDATE';

const songList = async(action, state) => {
    try{
        const response = (await SongService.index()).data
        const result = {isLoading:false, response}
        return result
        // return [isLoading:true,...response]
    }catch(e){
        const {...error} = e.response.data
        return error
    }
}
const songSearch = async (action, state) => {
    try{
        let response = (await SongService.index(action.payload)).data 
        const result = {isLoading:false, response}
        return {...result}
    }catch(e){
        const {...error} = e.response.data
        return error
    }
}
const songUpdate = async (action, state) => {
    try{
        let response = (await SongService.index(action.payload)).data 
    }catch(e){
        const {...error} = e.response.data
        return error
    }
}

export const songsReducer = ( state, action ) => {
    switch( action.type ){
        case SONGS_LIST:
            return songList(action, state)
        case SONG_SEARCH:
            return songSearch(action, state)
        case SONG_UPDATE:
            return songUpdate(action, state)
        default: 
            return state;
    }
}