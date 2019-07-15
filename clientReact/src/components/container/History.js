import React, { useState, useEffect, useContext } from 'react';
import HistoriesService from '../services/HistoriesService';
import Collumns from '../presentational/tables/Collumns';
import THead from '../presentational/tables/Head';
import Panel from '../presentational/generic/Panel';
import {AuthenticationContext} from '../context/AuthenticationContext'


const History = ()=> {
    const [history, setHistory] = useState([]);
    const [auth, setAuth] = useContext(AuthenticationContext);

    const fetchData= async()=>{
        try{
            const response = (await HistoriesService.index({
                UserId:1
            })).data;
            setHistory(response)
        }catch(e){
            console.log(e.response.data)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const CollumnHistory = history.map((data, key)=><Collumns data={[data.title, data.artist]} key={key} />)
    return(
        <>
            <Panel title="History">
                <table className="centered highlight responsive-table">
                    <THead  header={['Song Title','Artist']}></THead>
                    {CollumnHistory}
                </table>
            </Panel>
        </>
    )
}
export default History;