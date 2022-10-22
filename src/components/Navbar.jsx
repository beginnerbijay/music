import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faHeart, faMusic} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='nav'>
        <NavLink to={'/'}><h2 className='letter'><FontAwesomeIcon icon={faMusic} /><span className='myicon'>Now Playing</span></h2></NavLink>
        <NavLink to={'/library'}><h2 className='letter'><FontAwesomeIcon icon={faBars} /><span className='myicon'>Playlist</span></h2></NavLink>
        <NavLink to={'/favorite'}><h2 className='letter'><FontAwesomeIcon icon={faHeart} /><span className='myicon'>Favorite</span></h2></NavLink>
    </div>
  )
}

export default Navbar