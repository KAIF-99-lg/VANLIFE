import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setToken } from "../utils/auth"; // ✅ import token setter
import "./Login.css";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: "",
    });

    const [error, setError] = React.useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const message = location.state?.message || "";

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginFormData),
            });

            if (!res.ok) {
                throw new Error("Invalid email or password");
            }

            const data = await res.json();

            // ✅ Store token and mark as logged in
            setToken(data.token);
            localStorage.setItem("loggedIn", "true");

            const redirectPath = location.state?.from?.pathname || "/host";
            navigate(redirectPath, { replace: true });

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="login-container">
            {message && <div className="warning-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
