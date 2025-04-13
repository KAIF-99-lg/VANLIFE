import React from "react"
import { useOutletContext } from "react-router-dom"
import "./HostVanInfo.css"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <div className="info-line">
                <span className="info-label">Name</span>
                <div className="info-content">
                    {currentVan.name}
                </div>
            </div>
            
            <div className="info-line">
                <span className="info-label">Description</span>
                <p className="info-content description-content">
                    {currentVan.description}
                </p>
            </div>
            
            <div className="info-line">
                <span className="info-label">Visibility</span>
                <span className="info-content">Public</span>
            </div>
        </section>
    )
}