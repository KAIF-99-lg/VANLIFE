import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import "./HostVanDetail.css"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data.vans ? data.vans[0] : data)
            })
    }, [id])
    
    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="host-van-detail-container">
            <div className="host-van-detail-header">
                <Link to=".." relative="path" className="back-link">&larr; <span>Back to all vans</span></Link>
            </div>
            
            <div className="host-van-detail-card">
                <div className="host-van-detail-overview">
                    <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-image" />
                    <div className="host-van-info">
                        <span className={`van-type ${currentVan.type}`}>{currentVan.type}</span>
                        <h2>{currentVan.name}</h2>
                        <p className="van-price">${currentVan.price}<span>/day</span></p>
                    </div>
                </div>
                
                <nav className="host-van-detail-nav">
                    <NavLink 
                        to="." 
                        end 
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Details
                    </NavLink>
                    <NavLink 
                        to="pricing" 
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="photos" 
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                
                <Outlet context={{ currentVan }} />
            </div>
        </div>
    )
}