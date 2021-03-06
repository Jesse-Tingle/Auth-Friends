import React, { useState } from 'react'
import api from '../utils/api';



export default function Signin(props) {

    const [err, setErr] = useState('')

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        api()
            .post('/api/login', data)
            .then(result => {
                console.log('token', result.data)
                localStorage.setItem('token', result.data.payload)
                props.history.push('/friends')
            })
            .catch(err => {
                setErr(err.response.data.error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {err && <div className="err">{err}</div>}

            <input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="text" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <button type="submit">Sign In</button>
        </form>
    )
}
