import React, {useEffect, useState, useContext} from 'react';
import { SongsContext } from '../../context/SongsContext';
import SearchContainer from '../../components/presentational/SearchContainer';
import SongService from '../../services/SongsService'
import qs from 'query-string'
import _ from 'lodash';

const Search = (props)=>{
    const {songState}= useContext(SongsContext)
    const [songs,setSongs] = songState
    const [search, setSearch] = useState({search:""});
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

    return (
        <SearchContainer name="search" value={search.search} handleChange={handleChange} />
    )
}

export default Search