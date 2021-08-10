import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import AddVideo from './AddVideo';

export default function Videos({ videoData }) {
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

    //
    let videoHTML = videoData.map((video, key) =>
        <div key={key}>
            <h3>{video.title}</h3>
            <p>{video.rating}</p>

            <div>
                <button onClick={() => upVote(videoData, key)}>UpVote <FontAwesomeIcon icon={faThumbsUp} /></button>
                <button onClick={() => downVote(videoData, key)}>UpVote <FontAwesomeIcon icon={faThumbsDown} /></button>
            </div>

            { video.url ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url.slice(32)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>No Data</h1> }
        </div>
    )

    //
    return videoHTML;
}
