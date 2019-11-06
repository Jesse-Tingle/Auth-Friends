// Displays an individual friend 
// and styles the friend card

// import React from 'react';
// import {Card} from 'semantic-ui-react';


// export default function Friend(props) {
//     return (
//         <div>
//             <Card> 
//                 <Card.Content>
//                 <Card.Header>Name: {props.name}</Card.Header>
//                 <Card.Description>
//                     <p>Age: {props.age} </p>
//                     <p>E-mail: {props.email}</p>
//                 </Card.Description>
//                 </Card.Content>
//             </Card> 
//         </div>
//     )
// }

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