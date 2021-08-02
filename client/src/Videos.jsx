import React, { useEffect, useState } from 'react';

import videoData from './exampleresponse.json';

export default function Videos() {
    const [ theVideoData, setVideoData ] = useState(["Nothing"]);

    useEffect(() => {
        setVideoData(videoData);
    }, []);

    let videoHTML = theVideoData.map(video =>
        <div>
            <h3>{video.id}</h3>
            <h3>{video.title}</h3>
            <iframe width="560" height="315" src={video.url}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>{video.rating}</h3>
        </div>
        )

    return videoHTML;
}
