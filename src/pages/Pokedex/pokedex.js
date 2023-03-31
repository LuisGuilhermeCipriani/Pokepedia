import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import foto from "../../1.png";

import "./pokedex.css";

export default function Pokedex() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function loadPokemon() {
            const response = await api.get(`/pokemon/`)

            setPokemon(response.data.results);
        }

        loadPokemon();
    }, []);


    return (
        <div className="main">
            {/*pokemon.map((item) => {
                return(
                    <article key={item.name}>
                        <strong>{item.name}</strong>
                    </article>
                )
            })*/}
            <div className="pokedex">
                <div className="display">
                    <h1 className="number">Nº 1</h1>
                    <img className="imagem" src={foto} alt="Pokemon" />
                </div>
                <div className="buttons">
                    <FaAngleLeft className="previousNext" />
                    <h2 className="name">Bulbasaur</h2>
                    <FaAngleRight className="previousNext" />
                </div>
            </div>
            <div className="informations">
                <div className="inside">
                    <article className="atribute">Tipo</article>
                    <article className="atribute">Altura</article>
                    <article className="atribute">Peso</article>
                </div>
            </div>
        </div>
    );
}