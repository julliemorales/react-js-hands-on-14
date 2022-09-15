// import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import { useState, useEffect } from "react";
import { getAllGames } from "../service/api";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGamesList = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const result = await getAllGames();
      setGames(result.data);
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <p className="text-6xl my-20">Free-to-Play Games</p>
        {isLoading && (
          <div className="mx-auto">
            <SpinnerDotted size="30%" color="#111827" className="mx-auto mb-" />
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games &&
            !isLoading &&
            games.map((game, index) => {
              return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg mx-auto"
                  key={index}
                >
                  <img
                    className="w-full"
                    src={game.thumbnail}
                    alt={game.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{game.title}</div>
                    <p className="text-gray-700 text-base">
                      {game.short_description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex items-center">
                    <div className="flex-grow">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {game.genre}
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllGames;
