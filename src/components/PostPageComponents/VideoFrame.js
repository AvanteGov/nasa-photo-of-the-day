import React from 'react';

function VideoFrame (props) {

    console.log(props)

    return (
        <div>
            <iframe src={props.videoURL}>
            </iframe>
        </div>
    )
}

export default VideoFrame;