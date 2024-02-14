import React, { useEffect, useState } from "react";
import { GameCardInterface } from "./interface";
import { fetchCover } from "../api";
import Link from "next/link";
import Image from "next/image";

const GameCard = ({
  id,
  name,
  summary,
  cover,
  image_id,
}: GameCardInterface) => {
  return (
    <div className="shadow-md m-2 p-4 rounded-2xl flex flex-row bg-gray-50 hover:bg-gray-300 ">
      <Link href={`/game/${id}`}>
        <div className="w-1/4">
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg`}
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
