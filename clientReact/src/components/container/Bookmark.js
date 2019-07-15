import React, { useState, useEffect } from 'react';
import BookMarkService from '../services/BookmarksService';
import Collumns from '../presentational/tables/Collumns';
import THead from '../presentational/tables/Head';
import Panel from '../presentational/generic/Panel'


const Bookmark = ()=> {
    const [bookmark, setBookmark] = useState([]);
    const fetchData= async()=>{
        try{
            const response = (await BookMarkService.index({
                UserId:1
            })).data;
            setBookmark(response)
        }catch(e){
            console.log(e.response.data)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const CollumnBookmark = bookmark.map((data, key)=><Collumns data={[data.title, data.artist]} key={key} />)
    return(
        <>
            <Panel title="Bookmark">
                <table className=" highlight ">
                    <THead header={['Song Title','Artist']}></THead>
                    {CollumnBookmark}
                </table>
            </Panel>
        </>
    )
}
export default Bookmark;