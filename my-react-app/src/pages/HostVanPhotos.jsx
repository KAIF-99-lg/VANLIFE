import React from "react"
import { useOutletContext } from "react-router-dom"
import "./HostVanPhotos.css"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <div className="host-van-photos">
            <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-detail-image" />
        </div>
    )
}