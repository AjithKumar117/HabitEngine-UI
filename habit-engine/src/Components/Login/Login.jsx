import React from 'react'
import "./Login.css";

export const Login = () => {
  return (
    <div>
        <div className='login-inputs email-field'>
        <label htmlFor="email-input">Enter your Email</label>
        <input type="email" name="email-input" id="" />
        </div>
        <div className='login-inputs password-field'>
        <label htmlFor="password-input">Enter your password</label>
        <input type='password' name="password-input" id=''/>       
        </div>
        <button className='btn btn-primary'>Login</button>
    </div>
  )
}
