import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Panel from '../../presentational/generic/Panel';
import YoutubeContainer from '../../presentational/social/YoutubeContainer';
import BookmarkButton from '../Bookmark/BookmarkButton';
import useDataApi from '../../../hooks/FetchHandler/useDataApi';



const SingleSong = (props)=>{
    const session = JSON.parse(window.localStorage.getItem('login')) || {isLoggedIn:false, error:''};
    const [view, setView] = useState(true)
    const [ songs, setSongs ] = useState({isLoading:true, data:[]});
    const [state, setFetchApi] = useDataApi({ action: 'SONG', type: 'show', payload: { id: props.match.params.id, token: session.token}} ,[{ album: "", albumImageUrl: "", artist: "", genre: "", lyrics: "", tab: "", title: "", youtubeId: ""}]);

    useEffect(()=>{
        setSongs(state)
    },[state.isLoading, state.data])
    
    
    return(
        <div className="row">
            <div className="col s12 l3">    
                <Panel title="Song">
                    <div>
                        <img src={(songs.data)&& songs.data.albumImageUrl} alt="" height="100%" width="100%" />
                        <h3>{(songs.isLoading === false)&&songs.data.title}</h3>
                        <p>{(songs.isLoading === false)&&songs.data.artist}</p>
                        <p>{(songs.isLoading === false)&&songs.data.album}</p>
                        {(songs.isLoading === false)&&<Link className="btn" to={`/song/${props.match.params.id}/edit`}>Edit</Link>}
                        <BookmarkButton {...props} token={session.token} />
                    </div>
                </Panel>
                <Panel title="Youtube">
                    {(songs.isLoading === false)&&<YoutubeContainer video={songs.data.youtubeId} /> }
                </Panel>
            </div>
            <div className="col s12 l9">
                <Panel title="Tab">
                    {(songs.isLoading === false)&&<p>{songs.data.tab} </p>}
                </Panel>
            </div>
            <div className="col s12 l9">
                <Panel title="Lyrics">
                    {(songs.isLoading === false)&&<p>{songs.data.lyrics} </p>}
                </Panel>
            </div>
        </div>
    )
}

export default SingleSong