import React from 'react'
import { useNavigate } from 'react-router-dom'
import user from './dataDummy/dataDummy'

function Home() {
    const navigate = useNavigate();

  return (
    <div>
    {user.map((item,index) => {
      return(
        <div key={index} style={{display:"flex", backgroundColor:"black", marginBottom:"5px"}}>
          <img style={{height:"75px", borderRadius:"100px",width:"75px", objectFit:"cover", marginRight:"10px"}} src={item.image} alt=""/>
          <div style={{color:"white"}}>
            <a onClick={() => navigate(`/profile/${item.id}`)}>{item.username}</a>
            <p>{item.follower}</p>
            <p>{item.following}</p>
          </div>
        </div>

      )
    })}
    
  </div>
  )
}

export default Home