import React, { useState } from 'react';

export default function AddVideo({ videoData, setVideoData }) {

    //State For Input Values
    const [ title, setTitle ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ url, setUrl] = useState("");


    //Function To Add Videos To The Video Data State
    const addVideo = (e) => {
        e.preventDefault();
        //
        let newVideoObject = {
            "title": title,
            "rating": rating,
            "url": url
        }
        //
        const newVideoData = [...videoData];
        //
        newVideoData.unshift(newVideoObject)
        //
        setVideoData(newVideoData)
    }

    return (
        <form onSubmit={addVideo}>
            <label >Title</label><br />
            <input type="text" id="fname" name="fname" onChange={(e) => setTitle(e.target.value)} /><br />
            <label >Url</label><br />
            <input type="text" id="lname" name="lname" onChange={(e) => setUrl(e.target.value)}/>

            <br />
            <button>Add Video</button>
        </form>
    )
}
