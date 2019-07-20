import React from 'react';
import Panel from '../presentational/generic/Panel';
import TextArea from '../presentational/form/TextArea';
import Text from '../presentational/form/TextBox';
import YoutubeContainer from '../presentational/social/YoutubeContainer';

const style = {
    textAlign: "center"
}
export const EditSong = ({handleChange, onClickEdit, ...props}) =>{
    return(
        <div className="row">
            <div className="col s12 l12">    
                <Text name="title" label="Title" value={props.title} handleChange={handleChange} />
                <Text name="artist" label="Artist/Band" value={props.artist} handleChange={handleChange} />
                <Text name="albumImg" label="Album Image" value={props.albumImageUrl} handleChange={handleChange} />
                <Text name="album" label="Album" value={props.album} handleChange={handleChange} />
                <Text name="youtubeUrl" label="Youtube ID" value={props.youtubeId} handleChange={handleChange} />
                <TextArea name="tab" label="Tab" value={props.tab} handleChange={handleChange} /> 
                <TextArea name="lyrics" label="Lyrics" value={props.lyrics} handleChange={handleChange} /> 
            </div>
        </div>
    )
}

export const ShowSong = ({onClickEdit,handleChange,...props})=>{
    return(
    <div className="row">
        <div className="col s12 l3">    
            <Panel title="Song">
                <div style={style}>
                    <img src={props.albumImageUrl} alt="" height="100%" width="100%" />
                    <h3>{props.title}</h3>
                    <p>{props.artist}</p>
                    <p>{props.album}</p>
                    <button onClick={()=>onClickEdit()}>Edit</button>  
                </div>
            </Panel>
            <Panel title="Youtube">
                <YoutubeContainer video={props.youtubeId} /> 
            </Panel>
        </div>
        <div className="col s12 l9">
            <Panel title="Tab">
                <TextArea tab={props.tab} name="tab" label="Tab" value={props.tab} /> 
            </Panel>
        </div>
        <div className="col s12 l9">
            <Panel title="Lyrics">
                <TextArea lyrics={props.lyrics} name="lyrics" label="Lyrics" value={props.lyrics} />
            </Panel>
        </div>
    </div>
    )
}