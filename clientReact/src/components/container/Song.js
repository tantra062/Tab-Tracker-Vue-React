import React, { useState, useEffect } from 'react';
import SearchContainer from '../presentational/SearchContainer';
import SongPresentational from '../presentational/Song';
import Panel from '../presentational/generic/Panel';
import SongService from "../services/SongsService";
import qs from 'query-string';
import SongTemplate from '../template/song/index';
import History from '../container/History'
import Bookmark from '../container/Bookmark'
import _ from 'lodash';
 
const Song = (props)=> {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState(qs.parse(props.location.search));

    const fetchData= async(query)=>{
        try{
            const sq = query.search
            let songData = (await SongService.index(sq)).data 
            setSongs(songData)
        }catch(e){
            console.log(e)
        }
    }
    const handleChange = (e) =>{
        const { value, name } = e.target;
        setSearch((previous)=>({
            ...previous, 
            [name]:value
        }))
        searchDebounced(value)
    }
    const searchDebounced = _.debounce(function(value){
            props.history.push({
                pathname:'/song',
                search: `?search=${value}`
            })
            fetchData({"search": value})
        },700
    )
    useEffect(()=>{
        const values = qs.parse(props.location.search)
        fetchData(values)
    },[])
    const mapData = (arr)=>{
        return arr.map((song, index)=><SongPresentational song={song} key={index} />)
    }
    const Historye=()=>{
        return (<History></History>)
    }
    const Bookmarke=()=>{
        return (<Bookmark></Bookmark>)
    }
    const Layout = () =>(
        <div className="row">
            <div className="col s12 m12">
                <SearchContainer name="search" value={search.search} handleChange={handleChange} />
            </div>            
            <div className="col m12">
                <Panel title="Songs">
                    {mapData(songs)}
                </Panel>
            </div>
        </div>);
    return (
        <SongTemplate Layout={Layout} History={Historye} Bookmark={Bookmarke} />
    )
}
export default Song

