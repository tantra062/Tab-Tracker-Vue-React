import React, { useState, useEffect} from 'react';
// import songData from '../../sampledata/songs';
import Panel from '../presentational/generic/Panel';
import { ShowSong, EditSong } from '../presentational/ShowSong';
import SongService from '../services/SongsService';


const SongDetail = ({match})=>{
    const [songs,setSongs] = useState(false)
    const [edit, setEdit] = useState(true)
    function handleChange(e){
        const { name, value } = e.target;
        setSongs((state)=>({...state,
            [name] : value
        }))
    }
    const fetchData = async() =>{
        const songData = (await SongService.index()).data
        setSongs(myArray(songData, match.params))
    }
    function myArray(arr, id){
        let found;
        arr.forEach(data => {
            if(data.id.toString() === id.id){
                    found = data 
                }
            }
        )
        return found
    }
    useEffect(()=>{
        fetchData()
    },[])
    const onClickEdit= ()=>{
        setEdit(!edit)
    } 
    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target)
        onClickEdit()
    }
    const SongEdit = ()=>{
        return (
            <div className="row">
                <Panel title="Edit Song">
                    <form onSubmit={handleSubmit}>
                        {(songs)&& <EditSong {...songs} handleChange={handleChange} onClickEdit={onClickEdit} /> }
                        <button type="submit"></button>
                    </form>
                </Panel>
            </div>
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