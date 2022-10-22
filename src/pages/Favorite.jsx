import React,{useContext} from 'react'
import {User} from '../App'
function Favorite() {
  let {songs} = useContext(User)
  return (
    <div className='library'>
          <div className='list'>
          <table>
            <tbody>
              {songs.filter(e=>e.fav==true).map((val,ind)=>{
                return (
                  <tr key={ind}>
                <td>{val.title}</td>
                <td>{val.artist}</td>
                <td>{val.album}</td>
              </tr>
                )
              })}
              
            </tbody>
          </table>
              <h4 style={{marginTop:50,marginLeft:700}}>pls Refresh for New Fav List</h4>
          </div>
        </div>
  )
}

export default Favorite