import GameCard from "../components/GameCard";
import { useColumnCount } from "../hooks/useColumnCount";
import { useGames } from "../hooks/gameHooks";
import { IoMdRefresh } from "react-icons/io";

function Jogos() {
  const { games, loading, refresh } = useGames();
  const numCols = useColumnCount();

  const columns = Array.from({ length: numCols }, (_, i) =>
    games.filter((_, index) => index % numCols === i)
  );

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
      <div className="flex gap-4 px-40 items-start w-full">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 flex-1">
            {col.map((item) => (
              <GameCard game={item} key={item.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jogos;
