"use client";

import React, { useEffect, useState } from "react";
import { fetchWiiGames } from "./api";
import GameCard from "./(components)/GameCard";
import { GameCardInterface } from "./(components)/interface";

const LandingPage = () => {
  const [games, setGames] = useState<GameCardInterface[]>([]);

  console.log(__dirname);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWiiGames();
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <div className="h-2/5 flex bg-slate-200 p-4 items-center justify-center">
        <div>
          <p className="text-4xl">Search hundreds of Wii games</p>
          <input
            type="text"
            className="rounded-lg w-80 h-12 mr-1 px-2"
            placeholder="Search"
          />
          <button className="bg-wiiBlue rounded-lg w-16 h-12 text-white">
            Go
          </button>
        </div>
      </div>
      <div className="mb-4 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map(
          (game) =>
            game.summary &&
            game.cover && (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                summary={game.summary}
                cover={game.cover}
              />
            )
        )}
      </div>
    </div>
  );
};

export default LandingPage;
