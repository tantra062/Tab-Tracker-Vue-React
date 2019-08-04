import BookmarkService from '../../../services/BookmarksService';

export const SUBSCRIBE = 'SUBSCRIBE';
export const UNSUBSCRIBE = "UNSUBSCRIBE";

const subscribe = async(action, state) => {
    try{
        const response = (await BookmarkService.post(action.payload)).data
        return {...response}
    }catch(e){
        console.log(e.response.data)
        return {error: e.response.data}
    }
};

const unsubscribe = async(action, state) => {
    try{
        await BookmarkService.delet(action.payload)
        return 
    }catch(e){
        console.log(e)
        return {error: e.response.data}    
    }
};

export const bookmarkReducer = (state, action) =>{
    switch( action.type ){
        case SUBSCRIBE:
            return subscribe(action, state);
        case UNSUBSCRIBE:
            return unsubscribe(action, state);
        default:
            return state
    };
};