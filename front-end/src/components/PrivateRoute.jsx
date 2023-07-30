import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute=({children})=>{
    const data=localStorage.getItem('final-data');
    const location=useLocation()
    console.log(location)
    return data? (children) :(<Navigate to={"/language"} state={location.pathname} replace />)
        
}