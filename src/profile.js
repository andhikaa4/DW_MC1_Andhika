 import React from 'react'
import { useParams } from 'react-router-dom'
import user from './dataDummy/dataDummy'


function Profile() {
    const id = useParams()
    const item = user.filter((p)=> p.id == id.id)
  return (
    <div>
                <div>
                    <img src={item[0].image} alt=""/>
                    <div>
                        <p>{item[0].username}</p>
                        <p>{item[0].follower}</p>
                        <p>{item[0].following}</p>
                    </div>
                </div>
    </div>
  )
}

export default Profile