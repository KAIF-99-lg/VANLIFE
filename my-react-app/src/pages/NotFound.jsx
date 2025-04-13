import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-center">
      <p className="not-found-message">Sorry, the page you were looking for was not found.</p>
      <Link to="/" className="not-found-button">Return to Home</Link>
    </div>
  );
}