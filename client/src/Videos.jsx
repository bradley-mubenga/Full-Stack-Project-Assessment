import React, { useEffect, useState } from 'react';

import { UpVote, DownVote } from './buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import videoData from './exampleresponse.json';

export default function Videos() {
    //Video Data State
    const [ theVideoData, setVideoData ] = useState(videoData);

    //Updating Video Data Each Time State Changes

    //
    let newHTML  = '';

    const upVote = (key) => {
        theVideoData[key].rating++;
    }

    //Loop To Videos
    let videoHTML = theVideoData.map((video, key) =>
        <div key={key}>
            <h3>{video.title}</h3>
            <p>{video.rating} votes</p>
            <div>
                <button onClick={() => upVote(key)}>UpVote <FontAwesomeIcon icon={faThumbsUp} /></button>
                <DownVote />
            </div>

            {video.url ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url.slice(32)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>No Data</h1>}
        </div>
        )

    return videoHTML;
}
