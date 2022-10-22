import React,{useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPause,  faPlay} from '@fortawesome/free-solid-svg-icons'
import {User} from '../App'
import Favorite from '../pages/Favorite'

function Control(props) {
  const {songs,currentSongIndex,setCurrentSongIndex,Playing,setPlaying} = useContext(User)

  const next = (forwards) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div className="control">
      <div>
        <button onClick={()=>next(false)}>
          <FontAwesomeIcon icon={faBackwardStep} className="icon_style" />
        </button>
      </div>
      <div>
        <button onClick={()=>setPlaying(!Playing)} >
          <FontAwesomeIcon icon={Playing?faPause:faPlay}  className="icon_style"/>
        </button>
      </div>
      <div>
        <button onClick={()=>next(true)}>
          <FontAwesomeIcon icon={faForwardStep} className="icon_style" />
        </button>
      </div>
    </div>
  );
}

export default Control