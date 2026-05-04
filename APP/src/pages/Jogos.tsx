import GameCard from "../components/GameCard";
import { useGames } from "../hooks/gameHooks";
import { IoMdRefresh } from "react-icons/io";

function Jogos() {
  const { games, loading, refresh } = useGames();

  if (loading)
    return (
      <div className="min-h-screen bg-zinc-800 flex justify-center items-center text-6xl font-bold text-white">
        Carregando...
      </div>
    );

  return (
    <div className="min-h-screen pt-20 bg-zinc-800 flex flex-col items-center">
      <div className="flex items-center justify-center pb-5 gap-3">
        <h1 className="text-5xl font-bold ml-8 text-white">JOGOS</h1>
        <button
          className="cursor-pointer p-1 rounded-full transition-all duration-300 
          hover:bg-zinc-600 hover:scale-105
          active:scale-90 active:bg-zinc-900"
          onClick={() => refresh()}
        >
          <IoMdRefresh className="text-4xl text-white" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-24 items-start">
        {games.length ? (
          games.map((item) => {
            return <GameCard game={item} key={item.id} />;
          })
        ) : (
          <div className="text-white text-2xl">Não tem jogos cadastrados!</div>
        )}
      </div>
    </div>
  );
}

export default Jogos;
