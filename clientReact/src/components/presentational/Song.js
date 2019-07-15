import React from 'react';
import { Link } from "react-router-dom";
// import { SongContext } from "@/hooks/Song";

const style = {
    margin:"20px 0"
}
const btnColor = {
    ...style,
    color:"black"
}
const fontWeight = {
    fontWeight:600
}

const SongPresentational = (props) =>{
    // const value = useContext(SongContext);
    return (
    <div className="row">
        <div className="col m6">
            <h2>{props.song.title}</h2>
            <h5 style={fontWeight}>{props.song.artist}</h5>
            <p>{props.song.genre}</p>

            <Link className="btn green" style={btnColor} to={`/song/${props.song.id}`}>View Song</Link>
        </div>
        <div className="col m6">
            <img src={props.song.albumImageUrl} alt="" style={style} height="100%" width="100%" />
        </div>
        <hr/>
    </div>
)};

export default SongPresentational;