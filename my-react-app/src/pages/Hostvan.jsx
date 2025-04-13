import React from "react"
import { Link } from "react-router-dom"
import "./Hostvan.css"

export default function Hostvans() {
    const [vans, setVans] = React.useState(null)

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    if (!vans) {
        return <h2>Loading...</h2>
    }

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {hostVansEls}
            </div>
        </section>
    )
}
