import React from 'react'
import {Link} from 'react-router-dom'

// Styled Components
import styled from 'styled-components';

export default function Friend({friend}) {
    // console.log(friend.id)
    return (

        <ContainerDiv>
            <Link className="card" to={`friend/${friend.id}`} friend={friend}>
                <div className="friend">
                    <h3>Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>E-mail: {friend.email}</p>
                </div>
            </Link>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`

    background-color: grey;
    width: 40%;
    padding: 3%;
    font-size: 1.3rem;
    font-weight: 600;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 2%;
    border-radius: 140px;
    

    .card {
        text-decoration: none;
        display: flex;
    
        .friend {
            margin: 0 auto;
        }
    }

`