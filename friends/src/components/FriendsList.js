import React, { useEffect, useState } from 'react';

import api from '../utils/api';
import '../App.css'; 

// Components 
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

export default function FriendsList() {

    const [friends, setFriends] = useState()


    useEffect(() => {
        api()
            .get('/api/friends')
            .then(result => {
                console.log('1st console log', result.data)
                setFriends(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if(friends) {
        console.log('operators lesson', friends)
    } else {
        console.log('spinner')
    }

    return (
        <div>
            {friends ? friends.map((item,index) => {
            return <Friend friend={item} key={index}/>}) : <i className="spinner" /> }
        </div>
    )
}

