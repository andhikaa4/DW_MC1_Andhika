 import React from 'react'
import { useParams } from 'react-router-dom'
import user from './dataDummy/dataDummy'


function profile() {
    const params = useParams()
    const index = params.id
  return (
    <div>
        
        {user[index].map((item) =>{
            return(
                <div>
                    <img src="" alt=""/>
                </div>
            )
        })}
    </div>
  )
}

export default profile