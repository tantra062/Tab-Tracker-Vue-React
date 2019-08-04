import React, {useState, useEffect} from 'react';
import SongService from '../services/SongsService';
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
            await SongService.index()
        }
        return a
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <SongsContext.Provider value={{
                songState:[songs, setSongs],
                setSongs,
                songs,
                getSong
            }}>
            {props.children}
        </SongsContext.Provider>
    );
}

export { SongsContext, SongsProvider };


