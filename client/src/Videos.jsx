import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import videoData from './exampleresponse.json';

export default function Videos() {
    //Video Data State
    const [ theVideoData, setVideoData ] = useState(videoData);

    //Vote State
    const [ votes, setVotes ] = useState(0);

    //Upvote
    const upVote = (videoData, index) => {
        let newData = videoData[index].rating++;
        setVotes(newData);
    }

    //Down vote
    const downVote = (videoData, index) => {
        let newData = videoData[index].rating--;
        setVotes(newData);
    }

    //Add A Video
    const addVideo = (videoData, newVideo) => {
        videoData.unshift(newVideo);
    }

    //Loop To Videos
    let videoHTML = theVideoData.map((video, key) =>
        <div key={key}>
            <h3>{video.title}</h3>
            <p>{video.rating}</p>
            <div>
                <button onClick={() => upVote(theVideoData, key)}>UpVote <FontAwesomeIcon icon={faThumbsUp} /></button>
                <button onClick={() => downVote(theVideoData, key)}>UpVote <FontAwesomeIcon icon={faThumbsDown} /></button>
                <button onClick={() => addVideo(theVideoData, {"title": "hello", "rating": 0, "url": "https://www.youtube.com/watch?v=dOGFevFXVGc"})}>ADD A VIDEO</button>
            </div>

            {video.url ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url.slice(32)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>No Data</h1>}
        </div>
        )

    return videoHTML;
}
