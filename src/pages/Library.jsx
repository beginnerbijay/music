import React,{useContext,useEffect, useState} from 'react'
import {User} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlay} from '@fortawesome/free-solid-svg-icons'
import gif from './icons8-futures.gif'

function Library() {
  let {songs,Playing,currentSongIndex,audioElement,currentTime,setCurrentSongIndex,setPlaying} = useContext(User)
  const [val, setval] = useState('')
  useEffect(() => {
    if (Playing) {
      audioElement.current.play();
      audioElement.current.currentTime = currentTime
    } else {
      audioElement.current.pause();
    }
  },[currentSongIndex]);
  const inputval=(e)=>{
    setval(e.target.value)
  }
   const search = () => {
     const arr = val.split(" ");
     for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     }
     const str = arr.join(" ");
     return songs.filter(
       (song) =>
         song.title.includes(str) ||
         song.artist.includes(str) ||
         song.album.includes(str)
     );
   };
  return (
    <div className='library'>
        <div className='search'>
          <form onSubmit={(e)=>e.preventDefault()}>
            <input type='text' placeholder='search song, artist or album' value={val} onChange={(e)=>inputval(e)}></input>
            <FontAwesomeIcon icon={faSearch} />
          </form>
          </div>
          <div className='list'>
          <audio preload="auto"  src={songs[currentSongIndex].src} ref={audioElement}></audio>
          <table>
            <tbody>
              {search().map((val,ind)=>{
                return (
                  <tr key={ind}>
                <td onClick={()=>{setCurrentSongIndex(ind)}} style={{textAlign:'center'}}>{currentSongIndex==ind?<img src={gif}/>:<FontAwesomeIcon icon={faPlay} onClick={setPlaying(true)}/>}</td>
                <td>{val.title}</td>
                <td className='hidden'>{val.artist}</td>
                <td>{val.album}</td>
              </tr>
                )
              })}
              
            </tbody>
          </table>

          </div>
        </div>
  )
}

export default Library