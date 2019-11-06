import React from 'react'

export default function LoginForm() {
    return (
        <form>
            <input type="text" name="username" placeholder="username"  />
            <input type="text" name="password" placeholder="password"  />
            <button>Submit</button>
        </form>
    )
}
