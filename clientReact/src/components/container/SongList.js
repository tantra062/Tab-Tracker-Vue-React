import React, { useContext } from 'react';
import { SongsContext } from "../../context/SongsContext";
import SongPresentational from '../presentational/Song';
import {AuthenticationContext} from '../../context/AuthenticationContext'
import Bookmark from '../container/Bookmark'

const SongList = (props)=> {
    const { songs } = useContext(SongsContext);

    return (
        <div>
            {songs.map((song, index)=><SongPresentational song={song} key={index} />)}    
        </div>
    )
}
export default SongList