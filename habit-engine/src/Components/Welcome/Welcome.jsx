import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={()=>{navigate("/login")}}>Login</button>
        <button onClick={()=>{navigate("/signup")}}>Sign Up</button>
    </div>
  )
}
