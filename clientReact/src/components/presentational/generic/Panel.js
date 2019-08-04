import React from 'react';

const Panel = (props) =>{
    const cardHeader= {
        padding: "24px",
        color:"white",
    }
    const h2 ={
        fontSize: "2.0em",
        margin:0
    }
    return(
        <div>
            <div className="card">
                <div style={cardHeader} className="blue">
                    <h2 style={h2}>{props.title}</h2>
                </div>
                <div className="card-content">
                    {props.children}
                </div>
            </div>
        </div>
    )

}

export default Panel