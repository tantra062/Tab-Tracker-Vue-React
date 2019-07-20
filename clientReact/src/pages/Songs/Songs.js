import React, {useContext} from 'react';
import SongList from '../../components/container/SongList';
import Panel from '../../components/presentational/generic/Panel';
import Search from '../../components/container/Search';
import {AuthenticationContext} from '../../context/AuthenticationContext';
import Bookmark from '../../components/container/Bookmark';
import History from '../../components/container/History';
const Songs = (props) => {
    
    const {login} = useContext(AuthenticationContext)
    if(login.isLoggedIn){
        return (
            <>
            <div className="row">
                <div className="col s12 m4">
                    <History></History>
                    <Bookmark></Bookmark>
                </div>
                <div className="col m8">
                    <div className="row">
                        <div className="col s12 m12">
                            <Search {...props} />
                        </div>            
                        <div className="col m12">
                            <Panel title="Songs">
                                <SongList {...props} />
                            </Panel>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
    return (
        <div className="row">
            <div className="col s12 m12">
                <Search {...props} />
            </div>            
            <div className="col m12">
                <Panel title="Songs">
                    <SongList {...props} />
                </Panel>
            </div>
        </div>
    )
}

export default Songs

