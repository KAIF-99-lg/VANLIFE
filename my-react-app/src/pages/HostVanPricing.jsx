import React from "react"
import { useOutletContext } from "react-router-dom"
import "./HostVanPricing.css"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <div className="host-van-pricing">
            <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
        </div>
    )
}