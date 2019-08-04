import React, {useState, useEffect, useReducer} from 'react';
import useDataApi from '../../../hooks/FetchHandler/useDataApi';

function BookmarkButton(props){

    const session = JSON.parse(window.localStorage.getItem('login')) || {isLoggedIn:false, error:''};
    const [state, setFetchApi] = useDataApi({action: "BOOKMARK", type: "index", payload:{SongId:props.match.params.id, token:session.token}},[]);
    const [bookmark, setBookmark] = useState({isLoading:true});

    function handleClick(){
        if(bookmark.data[0] ){
            setFetchApi({action: "BOOKMARK", type: "unsubscribe", payload:{id:state.data[0].id, token:session.token}});
        }else{
            setFetchApi({action: "BOOKMARK", type: "subscribe", payload:{SongId: props.match.params.id, token:session.token}});
        }
    } 
    useEffect(() => {
        setBookmark(state)
    }, [state.isLoading, bookmark])
    return(
        <>
            {(bookmark.isLoading)?'Loading . . .':<button className={(bookmark.data[0])?'btn yellow':'btn green'} onClick={handleClick}>{(bookmark.data[0])?'Bookmarked':'Bookmark'}</button>}
        </>
    )
}

export default BookmarkButton