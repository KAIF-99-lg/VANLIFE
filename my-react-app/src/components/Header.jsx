import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa"
import "./Header.css"

export default function Header() {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem("loggedIn") === "false")

    function handleLogout() {
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("token") // If you're storing token
        setLoggedIn(false)
        navigate("/")
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            const isLoggedIn = localStorage.getItem("loggedIn") === "true"
            setLoggedIn(isLoggedIn)
        }, 500) // Poll every 500ms

        return () => clearInterval(interval)
    }, [])

    return (
        <header className="navbar">
            <Link className="home" to="/">#VANLIFE</Link>
            <nav className="nav">
                <Link to="/host" className="host">Host</Link>
                <Link to="/about" className="about">About</Link>
                <Link to="/vans" className="vans">Vans</Link>

                {loggedIn ? (
                    <>
                        <button onClick={handleLogout} className="primary-btn">Logout</button>
                    </>
                ) : (
                    <Link to="/login"><FaRegUserCircle /></Link>
                )}
            </nav>
        </header>
    )
}
