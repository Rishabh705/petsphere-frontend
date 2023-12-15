import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../utils/api"
import '../styles/login.css'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ username: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(() => {
                dispatch(login(loginFormData.username))
                navigate('/pets', {replace:true})
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h2>Sign in to your account</h2>
            {error && <h3 className="red">{error.message}</h3>}

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="username"
                    onChange={handleChange}
                    type="username"
                    placeholder="Username"
                    value={loginFormData.username}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
            <Link to='/register'>No account?</Link>
        </div>
    )
}
