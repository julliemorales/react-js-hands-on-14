import axios from "axios";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "*******************************************",
    "X-RapidAPI-Host": "******************************************",
  },
};

// const baseUrl = "https://www.freetogame.com/api";
const baseUrl = "https://www.freetogame.com/api";

// export const getAllGames = async () => {
//   return await axios.get(`${baseUrl}/games`);
// };
export const getAllGames = async () => {
  return await axios.request(options);
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
};

export const getGame = async (id) => {
  return await axios.get(`${baseUrl}/game?id=${id}`);
};
