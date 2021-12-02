//Array of the letters and there sounds using key code for each letter
//The letters are the keys that starts the music and stops it
const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q', 
      id: 'SilentStar',
      url: "/sounds/SilentStar_120_Em_OrganSynth.mp3"
    },  
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'PAS3GROOVE1',
      url: "/sounds/PAS3GROOVE1.03B.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'MazePolitics',
      url: "/sounds/MazePolitics_120_Perc.mp3"
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'GrooveB',
      url: "/sounds/GrooveB_120bpm_Tanggu.mp3"
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'FUD',
      url: "/sounds/FUD_120_StompySlosh.mp3"
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'electricGuitar',
      url: "/sounds/electric guitar coutry slide 120bpm - B.mp3"
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Bass",
      url: "/sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3"
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'stutter',
      url: "/sounds/120_stutter_breakbeats_16.mp3"
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'funk',
      url: "/sounds/120_future_funk_beats_25.mp3"
    }
  ];

  export default audioClips;