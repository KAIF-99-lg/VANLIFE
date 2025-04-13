import React from "react"
import { useParams,Link } from "react-router-dom"
import "./VanDetail.css"

export default function VanDetails() {
    const { id } = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched van details:", data)
                setVan(data.vans)
            })
            .catch(err => {
                console.error("Failed to fetch van:", err)
            })
    }, [id])

    return (
        <div className="van-detail-container">
            <div className="van-detail-header">
                <Link to=".." relative="path" className="back-link">&larr; <span>Back to all vans</span></Link>
            </div>
            {van ? (
                <>
                    <div className="van-image-container">
                        <img className="van-image" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="van-detail-content">
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p className="van-description">{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}