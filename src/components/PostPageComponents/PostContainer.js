import React from 'react';
import VideoFrame from './VideoFrame';

function PostContainer (props) {
    console.log(props);

    return (
        <div className="postContainer">
            <h1>{props.content.title}</h1>
            <p>{props.content.date}</p>
            <VideoFrame videoURL={props.content.url}/>
            <p>{props.content.explanation}</p>
        </div>
    )
}

export default PostContainer;