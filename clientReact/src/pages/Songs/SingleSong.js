import React, {useEffect} from 'react';
import Song from '../../components/SongList/Song/Song';
import useDataApi from '../../hooks/FetchHandler/useDataApi';

const SingleSong = (props)=>{
    const prev = JSON.parse(window.localStorage.getItem('login')) || {isLoggedIn:false, error:''};
    useDataApi({ action: 'HISTORY', type: 'post', payload: { SongId: props.match.params.id, token: prev.token}} ,[{ album: "", albumImageUrl: "", artist: "", genre: "", lyrics: "", tab: "", title: "", youtubeId: ""}]);
    return(
        <Song {...props}></Song>
    )
}

export default SingleSong