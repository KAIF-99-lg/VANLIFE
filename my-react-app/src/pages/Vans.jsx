import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./Vans.css"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(true)

    const typeFilter = searchParams.get("type")
    const filterVan = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching vans:", err)
                setLoading(false)
            })
    }, [])

    // Function to handle filter button clicks
    const handleFilterClick = (filterType) => {
        if (typeFilter === filterType) {
            setSearchParams({}) // Clear filter if clicking the active one
        } else {
            setSearchParams({ type: filterType }) // Set new filter
        }
    }

    return (
        <div className="van-list-container">
            <div className="van-list-filter-container">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <button
                        onClick={() => handleFilterClick("simple")}
                        className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                        aria-pressed={typeFilter === "simple"}
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => handleFilterClick("luxury")}
                        className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                        aria-pressed={typeFilter === "luxury"}
                    >
                        Luxury
                    </button>
                    <button
                        onClick={() => handleFilterClick("rugged")}
                        className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                        aria-pressed={typeFilter === "rugged"}
                    >
                        Rugged
                    </button>
                    {typeFilter && (
                        <Link to="." className="clear-filters-link">Clear filter</Link>
                    )}
                </div>
            </div>

            <div className="van-list">
                {loading ? (
                    <p className="loading-text">Loading vans...</p>
                ) : vans.length > 0 ? (
                    filterVan.map(van => (
                        <div key={van.id} className="van-tile">
                            <Link to={`/vans/${van.id}`}>
                                <img src={van.imageUrl} alt={`${van.name} van`} />
                                <div className="van-info">
                                    <h3>{van.name}</h3>
                                    <p>${van.price}<span>/day</span></p>
                                </div>
                                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-vans-text">No vans available</p>
                )}
            </div>
        </div>
    )
}