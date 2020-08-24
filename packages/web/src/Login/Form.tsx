import React, { useState, useEffect } from 'react'
import './Form.css'

function Form() {
    const [registration, setRegistration] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [done, setDone] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password })
        };
        if (done) { 
            fetch('http://localhost:3333/registration', requestOptions)
            setDone(false) 
        }
    }, [done])


    return (
        <div className='Form'>
            <h3 className='Form-title'>
                {registration ? 'Registration' : 'Log in'}
            </h3>

            <label>User name</label>
            <input
                onChange={(event) => setUserName(event.target.value)}
                className='Form-input'
                type='text'
                required
            />

            <label>Password</label>
            <input
                onChange={(event) => setPassword(event.target.value)}
                className='Form-input'
                type='password'
                required
                minLength={6}
            />

            <div className='Form-button'
                onClick={() => setDone(true)}
            > Continue </div>
            <div
                className='Form-button-registration'
                onClick={() => setRegistration(!registration)}
            >
                {registration ? 'Log in' : 'Registration'}
            </div>
        </div>
    )
}

export default Form