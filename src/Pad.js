import React, { useState, useEffect } from "react";

//use object distracrture {}
const Pad = ({ clip, volume, setRecording }) => {
  let v;
  v = volume;
  // set active to know what key was pressed, set to false by default
  const [active, setActive] = useState(false);
  useEffect(() => {
    //play clip by the keyboard letters
    const handleKeyPress = (e) => {
      if (e.keyCode === clip.keyCode) {
        volume = v;
        playSound();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  //The letters are the keys that starts the music and stops it
  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    //true when key is pressed
    setActive(true);
    //the square blink with Yellow when press there letter key using Timeout
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    if (audioTag.paused) {
      audioTag.play();
      audioTag.loop = true;
      //takes the previous recording key and add to it the next key
      setRecording((prev) => prev + clip.keyTrigger + " ");
    } else {
      //stops the sound immediately after clicking
      audioTag.pause();
      setActive(false);
    }
  };

  return (
    //on click: to play the sound by click, active- blink yellow when press a key
    <div
      onClick={playSound}
      className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"}`}
    >
      {/* The gray squares */}
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {/* Getting the letters on the squares */}
      {clip.keyTrigger}
    </div>
  );
};
export default Pad;
