"use client";
import { fetchGameByID, fetchScreenshotsByID } from "@/app/api";
import React, { useEffect, useState } from "react";
import { GameInterface } from "@/app/(components)/interface";

import { Carousel } from "@material-tailwind/react";
const GamePage = ({ params }: { params: { id: string } }) => {
  const [gameData, setGameData] = useState<GameInterface>();
  const [screenshots, setScreenshots] = useState<
    | Array<{
        image_id: string;
        id: number;
        url: string;
      }>
    | undefined
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGameByID(params.id);
      setGameData(data[0]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchScreenshots = async () => {
      const data2 = await fetchScreenshotsByID(params.id);
      setScreenshots(data2);
    };
    fetchScreenshots();
  }, []);

  return (
    <div className="bg-gray-200 max-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        {gameData ? (
          <div>
            <p className="text-2xl font-bold mb-4">{gameData.name}</p>
            <p>Released {gameData.first_release_date}</p>

            <Carousel className="rounded-xl" placeholder={"/placeholder.png"}>
              {screenshots?.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={`https://images.igdb.com/igdb/image/upload/t_original/${screenshot.image_id}.jpg`}
                  alt={`Screenshot ${screenshot.id}`}
                  className=" "
                />
              ))}
            </Carousel>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GamePage;
