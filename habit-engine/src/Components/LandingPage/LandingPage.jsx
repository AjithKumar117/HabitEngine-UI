import React from 'react'
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className='container'>
        <h1>Build Better Habits. One Day at a Time.</h1>
        <p>Track habits, stay consistent, and turn small actions into big results.</p>
        <p>Start building better habits today.</p>
        <button className='btn btn-primary' onClick={()=>navigate("/welcome")}>Get Started Free</button>
    </div>
  )
}
