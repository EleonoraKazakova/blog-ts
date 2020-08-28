import React, { useState, useEffect } from 'react'
import './Form.css'
import { User } from '../types'

function Form(props: { setUser: (arg: User | null) => void }) {
    const [registration, setRegistration] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [done, setDone] = useState<boolean>(false)//we use 'done' to make request to backend
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password })
        };

        const endpoint = registration ? '/registration' : '/login'  

        if (done) {
            const makeRequest = async () => {
                const response = await fetch(`http://localhost:3333${endpoint}`, requestOptions)
                if( response.status >= 200 && response.status <= 299){
                    const user: User = await response.json()
                    props.setUser(user) //write the response from backend after async-await-calling 
                } else {
                    console.log(response.status, await response.text())
                }
            }
            makeRequest()
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
                onChange={(event) => setUserName(event.target.value)}//we write value in setUserName from input
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