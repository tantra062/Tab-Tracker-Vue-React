import React, { useState, useEffect} from 'react';
import Collumns from '../../presentational/tables/Collumns';
import THead from '../../presentational/tables/Head';
import Panel from '../../presentational/generic/Panel';
import useDataApi from '../../../hooks/FetchHandler/useDataApi';


const Bookmark = ({token})=> {
    const [bookmark, setBookmark] = useState([{title:""}]);

    //fetchType, action: SONG LOGIN BOOKMARK HISTORY, payload: payload, token: token
    const [state] = useDataApi({action:'BOOKMARK', type: 'index',  payload: {token: token}}, [{ album: "", albumImageUrl: "", artist: "", genre: "", lyrics: "", tab: "", title: "", youtubeId: ""}]);
    
    useEffect(()=>{
        setBookmark(state.data)
    },[state.isLoading, state.data]);
    
    const CollumnBookmark = bookmark.map((data, key)=><Collumns data={[data]} key={key} />)
    
    return(
        <>
            <Panel title="Bookmark">
                {(state.isLoading)?"Loading ....":
                    <table className=" highlight ">
                        <THead header={['Song Title','Artist']}></THead>
                        {CollumnBookmark}
                    </table>
                }
            </Panel>
        </>
    )
}
export default Bookmark;