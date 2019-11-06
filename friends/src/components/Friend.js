import React from 'react'
import {Link} from 'react-router-dom'

export default function Friend({friend}) {
    // console.log(friend.id)
    return (
        <Link to={`friend/${friend.id}`} friend={friend}>
            <div className="card">
                <h3>Name: {friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>E-mail: {friend.email}</p>
            </div>
        </Link>
        
    )
}