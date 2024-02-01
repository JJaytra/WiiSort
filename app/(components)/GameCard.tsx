import React, { useEffect, useState } from "react";
import { GameCardInterface } from "./interface";
import { fetchCover } from "../api";
import Link from "next/link";
import Image from "next/image";

const GameCard = ({ id, name, summary, cover }: GameCardInterface) => {
  const [image, setImage] = useState<string>("/placeholder.jpg");

  useEffect(() => {
    const getImage = async () => {
      const data = await fetchCover(id);
      console.log(`http:${data[0].url}`);
      setImage(`http:${data[0].url}`);
    };
    getImage();
  }, []);

  return (
    <div className="border border-black m-2 p-4 rounded-2xl flex flex-row bg-gray-50">
      <Link href={`/game/${id}`}>
        <div className="w-1/4">
          <img src={image} alt="a" className="rounded-lg max-w-lg mx-auto" />
        </div>
        <div className="w-3/4 py-7">
          <div>{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
