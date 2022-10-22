import React,{useContext} from 'react'
import {User} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faHeart, faVolumeOff, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

function Details(props) {
  const {songs,currentSongIndex,Playing} = useContext(User)
  return (
    <div className='details'>
      <img src={songs[currentSongIndex].img} className={Playing?'spin':''}/>
      <div className='sub_details'>
      <h1>{songs[currentSongIndex].title}</h1>
      <h3>Artists : {songs[currentSongIndex].artist}</h3>
      <h3>Album : {songs[currentSongIndex].album}</h3>
      <h3 className="hidden">Year : {songs[currentSongIndex].year}</h3>
      <div>
    <button className='fav' onClick={()=>songs[currentSongIndex].fav=true}><h4>Add To Favorite<FontAwesomeIcon icon={faHeart} className="icon_fav" /></h4></button>
    </div>
      <div className='up'>
      <span>{props.volume==0?<FontAwesomeIcon icon={faVolumeXmark}  onClick={()=>{
        props.audioElement.current.volume=1
        props.setvolume(1)
     }}/>:<FontAwesomeIcon icon={faVolumeUp}  onClick={()=>{
        props.audioElement.current.volume=0
        props.setvolume(0)}}/>
}</span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onChange={(e) => {
          props.audioElement.current.volume = e.target.value
          props.setvolume(e.target.value)}}
          className="volume"
      />
      </div>
      </div>
      
    </div>
  )
}

export default Details