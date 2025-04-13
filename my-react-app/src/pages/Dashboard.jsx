import React from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import "./Dashboard.css"

export default function Dashboard() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        fetch("/api/host/vans") // ✅ All vans
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch vans")
                return res.json()
            })
            .then((data) => {
                setVans(data.vans || data) // handle both formats
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    function renderVanElements(vans) {
        return (
            <div className="host-vans-list">
                <section>
                    {vans.map((van) => (
                        <div className="host-van-single" key={van.id}>
                            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                            <div className="host-van-info">
                                <h3>{van.name}</h3>
                                <p>${van.price}/day</p>
                            </div>
                            <Link to={`vans/${van.id}`}>View</Link>
                        </div>
                    ))}
                </section>
            </div>
        )
    }

    if (error) return <h1>Error: {error.message}</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>

            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p><span>5.0</span>/5</p>
                <Link to="reviews">Details</Link>
            </section>

            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                {renderVanElements(vans)}
            </section>
        </>
    )
}
