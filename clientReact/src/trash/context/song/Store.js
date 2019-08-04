import React, {useReducer, useEffect} from 'react';
import SongContext from './Context';
import { songsReducer, SONG_SEARCH, SONGS_LIST, SONG_UPDATE } from './Reducer';

const Store = (props) => {
    const initialState = {isLoading:true}
    const [ songState, dispatch ] = useReducer(songsReducer, initialState);
    const songsList = (payload) =>{
        setTimeout(()=>{
            dispatch({type:SONGS_LIST, payload: payload})
        }, 700)
    }
    const songSearch = (payload) =>{
        setTimeout(()=>{
            dispatch({type:SONG_SEARCH, payload: payload})
        }, 700)
    }
    const songUpdate = (payload) =>{
        setTimeout(()=>{
            dispatch({type:SONG_UPDATE, payload: payload})
        }, 700)
    }
    useEffect(()=>{
        songsList()
    },[])
    return (
        <SongContext.Provider
            value={
                {
                    songState: songState,
                    songsList: songsList,
                    songSearch: songSearch,
                    songUpdate: songUpdate
                }
            }
            >
            {props.children}
        </SongContext.Provider>
    );
};
export default Store

