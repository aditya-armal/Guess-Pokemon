import React, { useEffect, useState } from "react";

import "./Home.css";

import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const Home = () => {
  const [randomPokemonImg, setRandomPokemonImg] = useState("../images/whosthatpokemon.png");
  const totalPokemons = 905;

  useEffect(() => {
    const getRandomPokemonImg = async () => {
      try {
        const randomPokemonBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/";
        const randomPokemonNumber = Math.floor(Math.random() * (totalPokemons + 1));
        const response = await fetch(`${randomPokemonBaseUrl}${randomPokemonNumber}.png`);
        if (!response.ok) {
          throw new Error('Failed to fetch random Pokemon image');
        }

        setRandomPokemonImg(response.url);
      } catch (error) {
        console.error(error);
      }
    };
    getRandomPokemonImg();
  }, []);
  return (
    <>
      <div className="navbar__container">
        <div className="blurred_shadow"></div>
        <div className="navbar">
          <h1 className="logo">Who's That Pokémon</h1>
          <div className="button__holders">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/aditya-armal/Who's That Pokémon"
            >
              <Button type="unfill" text="Github" />
            </a>
            <Link to="/play">
              <Button type="fill" text="Start" />
            </Link>
          </div>
        </div>
      </div>

      <div className="home__container">
        <div className="home__container-left__side">
          <h1 className="left__side-heading">
            Who's that <span>Pokémon</span>
          </h1>

          <Link to="/play">
            <button className="play__btn">Play</button>
          </Link>

          <h1 className="left__side-play__now-outline">Guess the Correct Pokemon</h1>
        </div>

        <div className="home__container-right__side">
          {randomPokemonImg && <img
            src={randomPokemonImg}
            loading="lazy"
            alt="pokemon"
            className="right__side_img"
          />}
          <div className="right__side_blurred-shadow"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
