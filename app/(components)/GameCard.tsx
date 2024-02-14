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
      console.log(data[0].image_id);
      setImage(
        `https://images.igdb.com/igdb/image/upload/t_cover_big/${data[0].image_id}.jpg`
      );
    };
    getImage();
  }, []);

  return (
    <div className="shadow-md m-2 p-4 rounded-2xl flex flex-row bg-gray-50 hover:bg-gray-300 ">
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
