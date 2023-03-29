import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header(){
    return(
        <header className="container">
            <Link to="/" className="link">Home</Link>
            <Link to="/pokedex" className="link">Pokédex</Link>
        </header>
    );
}