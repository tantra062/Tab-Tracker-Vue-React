import React from 'react';

const SongTemplate = (props) => {
    //(isLoggedIn)? a: a;
    return (
        <div className="row">
            <div className="col s12 l12">
                {props.Layout()}    
            </div>
        </div>
    )
}

export default SongTemplate