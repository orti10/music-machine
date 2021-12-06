import React, { useState } from "react";
import audioClips from "./audio/audio";
import Pad from "./Pad";

const App = () => {
  //state called volume, recording, and bpm ans sets default values
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [bpm, setBpm] = useState(120);

  //play the recording by pressed keys
  const playRecording = () => {
    let index = 0;
    //track and save the keys that are pressed using array
    let recordArray = recording.split(" ");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.currentTime = 0;
      audioTag.volume = volume;
      audioTag.play();
      index++;
    }, 600);
    //wait and clear the interval (so the music will not play on the background)
    setTimeout(() => clearInterval(interval), 600 * recordArray.length - 1);
  };
  //plays all the audio clips all at once
  const playAll = () => {
    let index = 0;
    const interval = setInterval(() => {
      const audioTag = document.getElementById(audioClips[index].keyTrigger);
      audioTag.currentTime = 0;
      audioTag.volume = volume;
      audioTag.play();
      index++;
    }, 200);
    setTimeout(() => clearInterval(interval), 200 * audioClips.length - 1);
  };
  //stops all the audio clips all at once
  const stopAll = () => {
    let index = 0;
    const interval = setInterval(() => {
      const audioTag = document.getElementById(audioClips[index].keyTrigger);
      audioTag.currentTime = 0;
      audioTag.volume = volume;
      audioTag.pause();
      index++;
    }, 100);
    setTimeout(() => clearInterval(interval), 100 * audioClips.length - 1);
  };

  return (
    <div className="text-center">
      {/* map each clip, clip use for all the active keys */}
      {audioClips.map((clip) => (
        <Pad
          key={clip.id}
          clip={clip}
          volume={volume}
          setRecording={setRecording}
        />
      ))}
      <br />
      <div className="volume">
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          //slide can be change (moving slide)
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          max="1"
          min="0"
          className="w-45"
        />
      </div>
      <div className="bpm">
        <h4>BPM</h4>
        <input
          type="range"
          step="5"
          onChange={(e) => setBpm(e.target.value)}
          value={bpm}
          max="120"
          min="30"
          className="w-45"
        />
      </div>
      {/* write the keys that we used */}
      <h3>{recording}</h3>
      {
        <>
          {/* 'Play' the last session -success=green */}
          <button onClick={playRecording} className="btn btn-success">
            Play-session
          </button>
          &nbsp;&nbsp;
          {/* 'Clear' the record and starts over -primary=blue */}
          <button onClick={() => setRecording("")} className="btn btn-primary">
            Clear
          </button>
          &nbsp;&nbsp;
          {/* 'Play All' button should start all the music immediately -warning=yellow*/}
          <button onClick={playAll} className="btn btn-warning">
            Play All
          </button>
          &nbsp;&nbsp;
          {/* 'Stop' button should stop all the music immediately -danger=red*/}
          <button onClick={stopAll} className="btn btn-danger">
            Stop
          </button>
        </>
      }
    </div>
  );
};
export default App;
