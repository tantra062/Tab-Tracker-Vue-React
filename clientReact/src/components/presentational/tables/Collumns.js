import React from 'react';

const Collumns = ({data})=>{
    const List = data.map((data, key)=><tr key={key}><td>{data.title}</td><td>{data.artist}</td></tr>)
    return(
        <tbody>
            {List}
        </tbody>
    )
}
export default Collumns;