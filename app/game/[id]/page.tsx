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
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white rounded shadow-md w-full max-w-4xl h-screen p-12">
        {gameData ? (
          <div className="">
            <p className="text-2xl font-bold mb-4">{gameData.name}</p>
            <p>
              Released:
              {new Date(
                gameData.first_release_date * 1000
              ).toLocaleDateString()}
            </p>
            <Carousel className="rounded-xl" placeholder={"/placeholder.png"}>
              {screenshots?.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${screenshot.image_id}.jpg`}
                  alt={`Screenshot ${screenshot.id}`}
                  className=" "
                />
              ))}
            </Carousel>
            <div className="pt-8">{gameData.summary}</div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GamePage;
