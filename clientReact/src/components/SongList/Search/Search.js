import React, {useState, useEffect} from 'react';
import SearchContainer from './SearchContainer';
import qs from 'query-string';
import _ from 'lodash';

const Search = (props)=>{
    const [search, setSearch] = useState({search:""});

    const fetchData= async(query)=>{
        const sq = query.search;
        props.setFetchType({action:'SONG', type:"index", payload:{search: sq, token:""} })
    }
    const handleChange = (e) =>{
        const { value, name } = e.target;
        setSearch((previous)=>({
            ...previous, 
            [name]:value
        }))
        searchDebounced(value)
    }

    /////////////////////////////////////////////////////
    /// Need to research some more about lodash.      ///
    /// Should only search after user finished typing ///
    /////////////////////////////////////////////////////
    
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
        // <></>
    )
}

export default Search