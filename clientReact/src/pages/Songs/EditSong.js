import React, {useContext, useState, useEffect} from 'react';
import Panel from '../../components/presentational/generic/Panel';
import TextArea from '../../components/presentational/form/TextArea';
import Text from '../../components/presentational/form/TextBox';
import {SongsContext} from '../../context/SongsContext';
import SongsServices from '../../services/SongsService';
import SongsService from '../../services/SongsService';


const style = {
    textAlign: "center"
}
export const EditSong = ({match}) =>{
    const [data,setData] = useState({
        album: "",
        albumImageUrl: "",
        artist: "",
        genre: "",
        id: 1,
        lyrics: "",
        tab: "",
        title: "",
        youtubeId: "",
    });
    const getSong = async()=>{
        console.log(match.params.id)
        const datas = (await SongsService.index(match.params.id)).data
        setData(datas[0])
    }
    const handleChange= (e)=>{
        console.log(e.target.value)
        const {name, value} = e.target
        setData((state)=>({
            ...state,
            [name]:value
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        submit()
    }
    useEffect(()=>{
        getSong()
    },[])
    async function submit(){
        try{
            const response = (await SongsServices.update(data)).data
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }
    if(data){
        return(
            <div className="row">
                <div className="col s12 l12">
                    <Panel title="Edit">
                        <form onSubmit={onSubmit}>
                            <Text name="title" label="Title" value={data.title} handleChange={handleChange} />
                            <Text name="artist" label="Artist/Band" value={data.artist} handleChange={handleChange} />
                            <Text name="albumImg" label="Album Image" value={data.albumImageUrl} handleChange={handleChange} />
                            <Text name="album" label="Album" value={data.album} handleChange={handleChange} />
                            <Text name="youtubeUrl" label="Youtube ID" value={data.youtubeId} handleChange={handleChange} />
                            <TextArea name="tab" label="Tab" value={data.tab} handleChange={handleChange} /> 
                            <TextArea name="lyrics" label="Lyrics" value={data.lyrics} handleChange={handleChange} /> 
                            <button type="submit">submit</button>
                        </form>
                    </Panel>
                </div>
            </div>
        )
    }
    return(
        <div>
            nothing
        </div>
    )
   
}

export default EditSong