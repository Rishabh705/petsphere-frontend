import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../utils/api"
import '../styles/login.css'

export default function Register() {
  const [loginFormData, setLoginFormData] = React.useState({ username: "", password1: "", password2: "" });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    // Check if passwords match
    if (loginFormData.password1 !== loginFormData.password2) {
      setError({ message: "Passwords do not match" });
      setStatus("idle");
      return;
    }

    // If passwords match, proceed with registration
    registerUser({'username':loginFormData.username, 'password':loginFormData.password1})
      .then(() => navigate('/login', { replace: true }))
      .catch(err => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Register your account</h1>
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
          name="password1"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password1}
        />
        <input
          name="password2"
          onChange={handleChange}
          type="password"
          placeholder="Password again"
          value={loginFormData.password2}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Registering..." : "Register"}
        </button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}