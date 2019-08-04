import React, {useContext} from 'react';
import SongList from '../../components/SongList/Songs/SongList';
import AuthContext from '../../components/AuthenticationComponent/Context/Context';
import Bookmark from '../../components/SongList/Bookmark/Bookmark';
import History from '../../components/SongList/History/History';


const Songs = (props) => {
    const {session} = useContext(AuthContext)
    const login = session

    /////////////////////////////////////////////////////////////////////////////
    ////PROBLEMM IS AFTER LOGIN, BOOKMARK AND HISTORY WONT PAINT IMMEDIATELY.////
    /////////////////////////////////////////////////////////////////////////////
    
    return (
        <>
        <div className="row">
            {(login.isLoggedIn)&&
            <div className="col s12 m4">
                <History {...session}></History>
                <Bookmark {...session}></Bookmark>
            </div>}
            <div className={(login.isLoggedIn)?"col m8":"col m12"}>
                <SongList {...props}/>
            </div>
        </div>
        </>
    )
}

export default Songs

