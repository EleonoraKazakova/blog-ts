import React, { useState } from 'react'
import './LoginButton.css'
import Form from './Form'
import {User} from '../types'

function LoginButton(props: {setUser: (arg: User | null) => void}) {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <div
                className='LoginButton-button'
                onClick={() => setShowForm(!showForm)}
            >
                Log in
            </div>
            <div >
                {showForm ? <Form setUser={props.setUser} /> : false}
            </div>
        </>
    )

}

export default LoginButton