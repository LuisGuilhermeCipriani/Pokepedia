import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Pokedex from "../pages/Pokedex/pokedex";
import Header from "../components/Header/header";

export default function RoutesSite() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    );
}