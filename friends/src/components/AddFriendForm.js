import React, { useState } from 'react'
import api from '../utils/api'

export default function AddFriendForm(props) {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const [err, setErr] = useState()

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        api()
            .post('/api/friends', newFriend)
            .then(result => {
                console.log('api post new friend', result)
                props.history.push('/friends')
            })
            .catch(err => {
                setErr(err.response.newFriend.error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>

            {err && <div className="err">{err}</div>}

            <input type="text" name="name" placeholder="Name" value={newFriend.name} onChange={handleChange} />
            <input type="text" name="age" placeholder="Age" value={newFriend.age} onChange={handleChange}/>
            <input type="text" name="email" placeholder="E-mail" value={newFriend.email} onChange={handleChange}/>
            <button type="submit">Add New Friend</button>
        </form>
    )
}
