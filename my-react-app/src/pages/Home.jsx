import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-section">
        <h1 className="home-heading">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home-subtext">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="cta-button" to="vans">
          Find your van
        </Link>
      </div>
    </div>
  );
}