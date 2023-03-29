import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Pokedex from "../pages/Pokedex/pokedex";

export default function RoutesSite() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
    );
}