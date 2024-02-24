"use client";

import React, { useEffect, useState } from "react";
import { fetchWiiGames } from "./api";
import GameCard from "./(components)/GameCard";
import { GameCardInterface } from "./(components)/interface";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";
import HeroContent from "./(components)/HeroContent";

const LandingPage = () => {
  const [games, setGames] = useState<GameCardInterface[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWiiGames(offset);
      setGames(data);
    };
    fetchData();
  }, [offset]);

  const scrollToGameList = () => {
    const gameListElement = document.getElementById("gamelist");
    if (gameListElement) {
      gameListElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const previousPage = () => {
    const new_offset = offset - 24;
    if (offset == 0) {
      return;
    }
    setOffset(new_offset);
    scrollToGameList();
  };

  const nextPage = () => {
    const new_offset = offset + 24;
    setOffset(new_offset);
    scrollToGameList();
  };

  return (
    <div className="">
      <HeroContent />
      <div
        className="mb-4 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-80"
        id="gamelist"
      >
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
                image_id={game.cover.image_id}
              />
            )
        )}
      </div>
      {/* For page manipulation */}
      <div className="flex justify-center">
        <div className="px-10 py-5 bg-gray-400 rounded-2xl flex justify-between">
          <button onClick={previousPage} className=" hover:text-white mx-2">
            <BackwardIcon className="w-8 h-8" />
          </button>
          <button onClick={nextPage} className=" hover:text-white mx-2">
            <ForwardIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
