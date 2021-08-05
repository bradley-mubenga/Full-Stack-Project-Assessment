import React, { useEffect, useState } from 'react';

import { UpVote, DownVote } from './buttons';

import videoData from './exampleresponse.json';

export default function Videos() {
    const [ theVideoData, setVideoData ] = useState(["Nothing"]);

    useEffect(() => {
        setVideoData(videoData);
    }, []);

    let videoHTML = theVideoData.map((video) =>
        <div key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.rating} votes</p>
            <div>
                <UpVote />
                <DownVote />
            </div>

            {video.url ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url.slice(32)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>No Data</h1>}
        </div>
        )

    return videoHTML;
}