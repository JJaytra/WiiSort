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
      <div className="bg-white rounded shadow-md w-full max-w-7xl h-screen p-12">
        {gameData ? (
          <div className="">
            {/* Game Info */}
            <div className="mb-10 flex">
              <div>
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameData.cover.image_id}.jpg`}
                  alt="a"
                  className="rounded-lg max-w-lg mx-auto mr-5"
                />
              </div>

              <div>
                <p className="text-5xl font-bold mb-10">{gameData.name}</p>
                <p>
                  Released:{" "}
                  {new Date(
                    gameData.first_release_date * 1000
                  ).toLocaleDateString()}
                </p>
                <div>
                  <span>Genres: </span>
                  {/* {gameData.genres &&
                    gameData.genres.map((genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index !== gameData.genres.length - 1 && ", "}
                      </span>
                    ))} */}
                </div>
                <div className="pt-8">{gameData.summary}</div>
              </div>
            </div>

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
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div></div>

        <div className="mt-20 font-bold">
          <button className="bg-blue-200 p-5">Save Game</button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
