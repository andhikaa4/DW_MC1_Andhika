 import React from 'react'
import { useParams } from 'react-router-dom'
import user from './dataDummy/dataDummy'


function Profile() {
    const id = useParams()
    const item = user.filter((p)=> p.id == id.id)
  return (
    <div>
                <div style={{backgroundColor:"grey", width:"700px", margin:" 0 auto"}}>
                    <div style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>
                    <img style={{width:"150px", height:"150px",borderRadius:"100px", objectFit:"cover"}} src={item[0].image} alt=""/>
                    <div>
                        <p>{item[0].username}</p>
                        <p>{item[0].follower}</p>
                        <p>{item[0].following}</p>
                    </div>
                        
                    </div>
                </div>
    </div>
  )
}

export default Profile