import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import SongsTemplate from './SongsTemplate';
import Panel from '../../presentational/generic/Panel';
import useDataApi from '../../../hooks/FetchHandler/useDataApi';


const SongList = (props)=> {
    const [list, setList] = useState({isLoading: true})
    //fetchType is an object with { action, type, payload, token }, action: SONG LOGIN BOOKMARK HISTORY, payload: payload, token: token
    const [state, setFetchType] = useDataApi({action:'SONG',type:"index" , payload: {search: '', token:"token"}}, [ { album: "", albumImageUrl: "", artist: "", genre: "", lyrics: "", tab: "", title: "", youtubeId: ""} ]);

    useEffect(()=>{
        setList(state)
    }, [state.isLoading])

    return(
        <div className="row">
            <div className="col s12 m12">
                <Search {...props} setFetchType={setFetchType} />
            </div>            
            <div className="col m12">
                <Panel title="Songs">
                    {(list.isLoading)? "loading. . . " :list.data.map((song, index)=><SongsTemplate song={song} key={index} />)}                    
                </Panel>
            </div>
        </div>
    )
}
export default SongList