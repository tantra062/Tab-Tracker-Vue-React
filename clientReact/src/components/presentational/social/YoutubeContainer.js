import React from 'react';
import Youtube from 'react-youtube';

const YoutubeContainer = (props) => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
    return(
        <div>
            <Youtube 
                videoId={props.video}
                opts = {opts}
                onReady={_onReady}
            />
        </div>
    )
}



export default YoutubeContainer;