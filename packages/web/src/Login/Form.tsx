import React from 'react'
import './Form.css'

function Form(){


    return (
        <div className='Form'>
            <h3 className='Form-title'>Log in</h3>

            <label>User name</label>
            <input className='Form-input' type='text' required minLength={6} maxLength={10} />

            <label>Password</label>
            <input className='Form-input' type='text' required minLength={6} maxLength={10} />

            <div className='Form-button'>Continue</div>



        </div>


    )
}

export default Form