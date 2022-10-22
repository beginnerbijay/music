import React,{useContext,useEffect,useState} from 'react'
import Control from '../components/Control'
import Details from '../components/Details'
import {User} from '../App'

function Home() {
  let {songs,currentSongIndex,Playing,audioElement,currentTime,setCurrentTime} = useContext(User)
  const [seekValue, setSeekValue] = useState(0);
  const [duration, setduration] = useState(0);
  const [volume, setvolume] = useState(1);
  
  useEffect(() => {
    if (Playing) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });
  const onPlaying = () => {
    setCurrentTime(audioElement.current.currentTime);
    setSeekValue(
      (audioElement.current.currentTime / audioElement.current.duration) * 100
    );
    setduration(audioElement.current.duration)
  };
  function convert(value) {
    return(Math.floor(value / 60 ? value / 60 : '00') + ":" + Math.floor(value % 60 ? value % 60 : '00'))
}
  return (
    <div className='home'>
        <Details volume={volume} setvolume={setvolume} audioElement={audioElement}/>
    <audio src={songs[currentSongIndex].src} ref={audioElement} onTimeUpdate={onPlaying}></audio>
    <div className='flex'>
    <div className='text-start'>{convert(currentTime)}</div>
    <div className='text-end'>{convert(duration)}</div>
    </div>
      <input
        type="range"
        min="0"
        max="100"
        step="0.001"
        value={seekValue}
        className='range'
        onChange={(e) => {
          const seekto = audioElement.current.duration * (+e.target.value / 100);
          audioElement.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
        <Control />
    </div>
  )
}

export default Home