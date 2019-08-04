import React from 'react';

const Head = ({header})=> {
    return(
        <thead>
            <tr>
                {header.map((data, key)=><th key={key}>{data}</th>)}
            </tr>
      </thead>
    )
}

export default Head