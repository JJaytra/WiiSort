const IGDB_ENDPOINT = "https://api.igdb.com/v4/games";
const IGDB_CLIENT_ID = "4j53ky4b5em3lyigttn0i1ra1qw8k0";
const IGDB_TOKEN = "Bearer owuff8n55kgdje253hzsaxja5683va";

export const fetchWiiGames = async () => {
  try {
    const res = await fetch(
      "http://localhost:8080/https://api.igdb.com/v4/games",
      {
        method: "POST",
        headers: {
          Authorization: IGDB_TOKEN,
          "Client-ID": IGDB_CLIENT_ID,
          dataType: "jsonp",
        },
        body: "fields *; where platforms = 5 & category !=5; limit 50;",
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error: games not found");
  }
};

export const fetchCover = async (game_id: number) => {
  try {
    const res = await fetch(
      "http://localhost:8080/https://api.igdb.com/v4/covers",
      {
        method: "POST",
        headers: {
          Authorization: IGDB_TOKEN,
          "Client-ID": IGDB_CLIENT_ID,
        },
        body: `fields url; where game=${game_id};`,
      }
    );
    const img = res.json();
    return img;
  } catch (error) {
    console.log("error");
  }
};

export const fetchGameByID = async (game_id: string) => {
  try {
    const res = await fetch(
      "http://localhost:8080/https://api.igdb.com/v4/games",
      {
        method: "POST",
        headers: {
          Authorization: IGDB_TOKEN,
          "Client-ID": IGDB_CLIENT_ID,
          dataType: "jsonp",
        },
        body: `fields *; where platforms = 5; where id = ${game_id}; limit 1;`,
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error: games not found");
  }
};

export const fetchScreenshotsByID = async (game_id: string) => {
  try {
    const res = await fetch(
      "http://localhost:8080/https://api.igdb.com/v4/screenshots",
      {
        method: "POST",
        headers: {
          Authorization: IGDB_TOKEN,
          "Client-ID": IGDB_CLIENT_ID,
          dataType: "jsonp",
        },
        body: `fields *; where game = ${game_id};`,
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {}
};
