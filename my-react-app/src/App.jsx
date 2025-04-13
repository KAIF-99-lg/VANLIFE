import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Income from "./pages/Income.jsx";
import Reviews from "./pages/Reviews.jsx";
import Hostvan from "./pages/Hostvan.jsx";
import HostVanDetail from "./pages/HostVanDetail.jsx";
import HostVanInfo from "./pages/HostVanInfo.jsx";
import HostVanPricing from "./pages/HostVanPricing.jsx";
import HostVanPhotos from "./pages/HostVanPhotos.jsx";
import HostLayOut from "./components/HostLayOut.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import AuthRequired from "./pages/AuthRequired.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container"> {/* Flex container */}
        <Header />
        <main className="main-content"> {/* Flex child that grows */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/login" element={<Login/>}/>
            
            <Route element={<AuthRequired/>}>
            <Route path="/host" element={<HostLayOut />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<Hostvan />} />
              <Route path="vans/:id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo/>} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
            </Route>

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}