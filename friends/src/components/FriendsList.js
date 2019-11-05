import React, { useEffect, useState } from 'react';

import api from '../utils/api';

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



    return (
        <div>
            {console.log('friends returns', friends)}
        </div>
    )
}

