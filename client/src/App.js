import "./App.css";
import React, { useEffect, useState } from 'react';

//React Components
import Videos from './Videos';
import AddVideos from './AddVideo';

//Important JSON Data
import videoDataJSON from './exampleresponse.json';

//
function App() {
  //Video Data State
  const [ videoData, setVideoData ] = useState([]);

  useEffect(() => {
    //
    fetch('http://127.0.0.1:5000/')
    .then(res => res.json())
    .then(data => setVideoData(data))
  }, [])

  console.log(videoData)

  return (
    <div className="App">
      <header className="App-header">
        <AddVideos videoData={videoData} setVideoData={setVideoData}/>
        <Videos videoData={videoData}/>
      </header>
    </div>
  );
}

export default App;
