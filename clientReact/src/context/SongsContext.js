import React, {useState, useEffect} from 'react';
import SongService from '../services/SongsService';
import _ from 'lodash';

const SongsContext = React.createContext([{}, ()=>{}]);



const SongsProvider = (props) =>{
    const [songs, setSongs] = useState([]);


    const fetchData= async(query)=>{
        try{
            let songData = (await SongService.index(query)).data 
            setSongs(songData)
        }catch(e){
            console.log(e)
        }
    }
    const getSong = async (match)=>{
        const a = async()=>{
            const songData = (await SongService.index()).data
        }
        return a
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <SongsContext.Provider value={{
                songState:[songs, setSongs],
                songs,
                getSong
            }}>
            {props.children}
        </SongsContext.Provider>
    );
}

export { SongsContext, SongsProvider };


