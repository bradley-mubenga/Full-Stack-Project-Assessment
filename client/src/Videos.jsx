import React, { useEffect, useState } from 'react';

import { UpVote, DownVote } from './buttons';

import videoData from './exampleresponse.json';

export default function Videos() {
    //Video Data State
    const [ theVideoData, setVideoData ] = useState(["Nothing"]);

    //Updating Video Data Each Time State Changes
    useEffect(() => {
        setVideoData(videoData);
    }, []);

    const upVote = (videoData) => {
        videoData.rating++;
    }

    let videoHTML = theVideoData.map((video) =>
        <div key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.rating} votes</p>
            <div>
                <UpVote upVote={upVote} video={video}/>
                <DownVote />
            </div>

            {video.url ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url.slice(32)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>No Data</h1>}
        </div>
        )

    return videoHTML;
}
