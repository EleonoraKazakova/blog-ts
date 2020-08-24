import React, { useState } from 'react'
import './LoginButton.css'
import Form from './Form'

function LoginButton() {
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
                {showForm ? <Form /> : false}
            </div>
        </>
    )

}

export default LoginButton