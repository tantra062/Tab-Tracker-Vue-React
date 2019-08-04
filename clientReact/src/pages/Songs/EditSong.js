import React, { useState, useEffect} from 'react';
import Panel from '../../components/presentational/generic/Panel';
import TextArea from '../../components/presentational/form/TextArea';
import Text from '../../components/presentational/form/TextBox';
import useDataApi from '../../hooks/FetchHandler/useDataApi';


export const EditSong = ({match}) =>{
    const [state, setFetchApi] = useDataApi({action:"SONG", type:"show", payload:{id: match.params.id, token:''}}, [{ album: "", albumImageUrl: "", artist: "", genre: "", id: 1, lyrics: "", tab: "",title: "",youtubeId: ""}]);
    const [data,setData] = useState({isLoading:true});

    const handleChange= (e)=>{
        const {name, value} = e.target;
        setData((prevState)=>({
            ...prevState,
            data:{
                ...prevState.data,
                [name]:value
            }
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        setFetchApi({action:"SONG", type:"update", payload:{payload:data.data, token: ""}})
    }
    console.log(state)
    useEffect(()=>{
        setData(state)
    },[state.isLoading])

    return(
        <div className="row">
            <div className="col s12 l12">
                <Panel title="Edit">
                {(data.isLoading === false)&&
                    <form onSubmit={onSubmit}>
                        <Text name="title" label="Title" value={data.data.title} handleChange={handleChange} />
                        <Text name="artist" label="Artist/Band" value={data.data.artist} handleChange={handleChange} />
                        <Text name="albumImg" label="Album Image" value={data.data.albumImageUrl} handleChange={handleChange} />
                        <Text name="album" label="Album" value={data.data.album} handleChange={handleChange} />
                        <Text name="youtubeUrl" label="Youtube ID" value={data.data.youtubeId} handleChange={handleChange} />
                        <TextArea name="tab" label="Tab" value={data.data.tab} handleChange={handleChange} /> 
                        <TextArea name="lyrics" label="Lyrics" value={data.data.lyrics} handleChange={handleChange} /> 
                        <button type="submit">submit</button>
                    </form>
                }
                </Panel>
            </div>
        </div>
    )
}

export default EditSong

// data: Array(1)
//     0:
//         artist: "Modest Mouse"

// data: Array(1)
//     0:
//         title: "Float Ona"

