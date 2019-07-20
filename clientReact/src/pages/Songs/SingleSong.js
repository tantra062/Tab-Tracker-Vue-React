import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Panel from '../../components/presentational/generic/Panel';
import YoutubeContainer from '../../components/presentational/social/YoutubeContainer';
import {SongsContext} from '../../context/SongsContext';
import {AuthenticationContext} from '../../context/AuthenticationContext';

// import { stringify } from 'query-string';



const SingleSong = ({match})=>{
    const { songState } = useContext(SongsContext);
    let [songs,setSongs] = songState
    const {login} = useContext(AuthenticationContext)
    const song = songs.find(song=> song.id.toString() == match.params.id)
    if(song){return(
        <div className="row">
            <div className="col s12 l3">    
                <Panel title="Song">
                    <div>
                        <img src={song.albumImageUrl} alt="" height="100%" width="100%" />
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                        <p>{song.album}</p>
                        <Link className="btn" to={`/song/${song.id}/edit`}>Edit</Link>

                        <button className="btn">Subscribe</button>
                        <button className="btn danger">UnSubscribe</button>

                    </div>
                </Panel>
                <Panel title="Youtube">
                    <YoutubeContainer video={song.youtubeId} />
                </Panel>
            </div>
            <div className="col s12 l9">
                <Panel title="Tab">
                    <p>{song.tab} </p>
                </Panel>
            </div>
            <div className="col s12 l9">
                <Panel title="Lyrics">
                    <p>{song.lyrics} </p>
                </Panel>
            </div>
        </div>
    )}
    return(
        <div>
            nothing rendered
        </div>
    )
}

export default SingleSong