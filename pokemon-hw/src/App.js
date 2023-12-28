import React, { useState, useEffect } from 'react';
import classes from "./App.css";
const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('error', error);
            }
        };

        fetchPokemonData();
    }, [pokemon.url]);

    return (
        <div className="pokemon-card">
            {pokemonData && (
                <>
                    <h2>{pokemonData.name}</h2>
                    <img
                        src={pokemonData.sprites.other.dream_world.front_default}
                        alt={pokemonData.name}
                    />
                </>
            )}
        </div>
    );
};

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('error', error);
            }
        };

        fetchPokemonList();
    }, []);

    return (
        <div className="pokemon-list">
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;


