import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AuthRequires() {
    const auth = useSelector((state) => {
        return state.auth
    })
    if (!auth.isAuthenticated) {
        return <Navigate to='/login' />
    }
    return (
        <Outlet />
    )
}
