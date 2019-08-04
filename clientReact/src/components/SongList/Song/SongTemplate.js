import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Panel from '../../components/presentational/generic/Panel';
import YoutubeContainer from '../../components/presentational/social/YoutubeContainer';
import SongsService from '../../services/SongsService'
import AuthContext from '../../components/AuthenticationComponent/Context/Context';
import BookMarkService from '../../services/BookmarksService';
import HistoriesService from '../../services/HistoriesService';


const SingleSong = ({match})=>{
    // const { songs } = useContext(SongsContext);

    const [ songs, setSongs ] = useState([]);
    const [bookmark, setBookmark] = useState(false)
    const [subscribeButton, setSubscribeButton] = useState()
    // const { session} = useContext(AuthenticationContext)
    //////////////////////////////////
    const { session } = useContext(AuthContext);
    
    const song = songs.find(song=> song.id.toString() === match.params.id)


    const firstView = async() =>{
        try{
            // const response = (await HistoriesService.post({
            //     SongId: match.params.id,
            //     token:  await session.token
            // })).data 
            const res = (await SongsService.index(match.params.id)).data
            setSongs((prev)=>([
                ...prev, ...res
            ]))
        }catch(e){
            console.error(e.response.data.error)
        }
    }
    const getBookmark = async () =>{
        try{
            const response = (await BookMarkService.index({
                token:  await session.token,
                SongId: match.params.id
            })).data
            setBookmark(response[0]);
            (bookmark)? setSubscribeButton(true) : setSubscribeButton(false);
        }catch(e){
            console.error(e.response.data.error)
        }
    }
    async function subscribe(){
        try{
            const response = (await BookMarkService.post({
                token: await session.token,
                SongId: match.params.id
            })).data
            setSubscribeButton(true)
        }catch(e){
            console.error(e.response.data.error)
        }
    }
    async function unsubscribe(){
        try{
            const response = (await BookMarkService.delet({
                id:bookmark.id,
                token: await session.token
            })).data
            setSubscribeButton(false)
        }catch(e){
            console.error(e.response.data.error)
        }
    }

    const renderButton = () =>{
        if(subscribeButton){
            return <button className="btn danger" onClick={unsubscribe}>UnSubscribe</button>
        }else{
            return<button className="btn" onClick={subscribe}>Subscribe</button>
        }
    }

    useEffect(()=>{
        getBookmark();
        firstView();
    },[session])
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
                        {renderButton()}
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