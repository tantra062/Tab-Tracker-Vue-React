import React,  { Component, useState, useEffect, useContext} from 'react';
import Panel from '../presentational/generic/Panel';
import {SongsContext} from '../../context/SongsContext';
import { ShowSong, EditSong } from '../presentational/ShowSong';


const SongDetail = ({match})=>{
    useContext(SongsContext)
    const {monster, getSong} = useContext(SongsContext)
    const song = getSong(match)
    const [songs, setSongs] = useState(song)
    const [edit, setEdit] = useState(true)
    function handleChange(e){
        const { name, value } = e.target;
        setSongs((state)=>({...state,
            [name] : value
        }))
    }
    const onClickEdit= ()=>{
        setEdit(!edit)
    } 
    function handleSubmit(e){
        e.preventDefault();
        onClickEdit()
    }
    const SongEdit = ()=>{
        
        return (
            <form onSubmit={handleSubmit}>
                {(songs)&& <EditSong {...songs} handleChange={handleChange} onClickEdit={onClickEdit} /> }
                <button type="submit"></button>
            </form>
        )
    }
    const Show = () =>{
        return(
            <ShowSong {...songs} onClickEdit={onClickEdit} />
        )
    }
    return (
        <div>
            {(songs!== true)&&(edit)?Show():SongEdit() }
        </div>
    )
}
export default SongDetail;

