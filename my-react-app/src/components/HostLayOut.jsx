
import { NavLink, Outlet } from "react-router-dom";
import "./HostLayOut.css";

export default function HostLayOut() {
    return (
        <div className="host-layout-container"> {/* New container div */}
            <nav className="host-nav">
                <NavLink to="/host" end className={({ isActive }) => isActive ? "active" : null}>Dashboard</NavLink>
                <NavLink to="/host/income" end className={({ isActive }) => isActive ? "active" : null}>Income</NavLink>
                <NavLink to="/host/vans" className={({ isActive }) => isActive ? "active" : null}>Vans</NavLink>
                <NavLink to="/host/reviews" className={({ isActive }) => isActive ? "active" : null}>Reviews</NavLink>
            </nav>
            <div className="host-content"> {/* New content wrapper */}
                <Outlet />
            </div>
        </div>
    );
}