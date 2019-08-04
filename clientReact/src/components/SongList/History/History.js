import React, { useState, useEffect } from 'react';
import Collumns from '../../presentational/tables/Collumns';
import THead from '../../presentational/tables/Head';
import Panel from '../../presentational/generic/Panel';
import useDataApi from '../../../hooks/FetchHandler/useDataApi';



const History = ({token})=> {
    const [history, setHistory] = useState([]);
    const [state] = useDataApi({action:'HISTORY', type: 'index',  payload: {token: token}}, [{ album: "", albumImageUrl: "", artist: "", genre: "", lyrics: "", tab: "", title: "", youtubeId: ""}]);

    useEffect(()=>{
        setHistory(state.data)
    },[state.isLoading, state.data]);

    return(
        <>
            <Panel title="History">
                <table className="centered highlight responsive-table">
                    <THead  header={['Song Title','Artist']}></THead>
                    { history.map((data, key)=><Collumns data={[data]} key={key} />)}
                </table>
            </Panel>
        </>
    )
}
export default History;