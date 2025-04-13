import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/auth"; // ✅ centralized auth

export default function AuthRequired() {
    const location = useLocation();
    const auth = isLoggedIn();
    console.log("Auth check:", auth);


    if (!auth) {
        return (
            <Navigate
                to="/login"
                state={{ message: "You must login first", from: location }}
                replace
            />
        );
    }

    return <Outlet />;
}
