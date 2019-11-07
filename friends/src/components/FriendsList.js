import React, { useEffect, useState } from 'react';

import api from '../utils/api';
import '../App.css'; 

// Components 
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';


// Styled Components
import styled from 'styled-components';

export default function FriendsList() {

    const [friends, setFriends] = useState([])


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
        <ContainerDiv>
            {friends.length ? friends.map((item,index) => {
            return <Friend friend={item} key={index}/>}) : <i className="spinner" /> }
        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

`