/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { GameCardInterface } from "./interface";
import Link from "next/link";

const GameCard = ({ id, name, summary, cover }: GameCardInterface) => {
  return (
    <div className="shadow-md m-2 p-4 rounded-2xl flex flex-row bg-gray-100 hover:bg-gray-300 ">
      <Link href={`/game/${id}`}>
        <div className="w-1/4">
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`}
            alt="a"
            className="rounded-lg max-w-lg mx-auto"
          />
        </div>
        <div className="w-3/4 py-7">
          <div>{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
