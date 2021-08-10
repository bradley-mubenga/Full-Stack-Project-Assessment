import "./App.css";
import React, { useState } from 'react';

//React Components
import Videos from './Videos';
import AddVideos from './AddVideo';

//Important JSON Data
import videoDataJSON from './exampleresponse.json';

//
function App() {
  //Video Data State
  const [ videoData, setVideoData ] = useState(videoDataJSON);

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
