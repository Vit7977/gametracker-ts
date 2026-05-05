import { useState } from "react";
import type { Game } from "../types/Game";
import GenderContainer from "./GenderContainer";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="mb-4 break-inside-avoid bg-gray-400 max-w-64 rounded-lg flex flex-col items-center justify-center text-center shadow-lg border border-gray-400
    transition-all duration-300 overflow-hidden 
    hover:bg-white hover:scale-105 hover:shadow-sky-500/50"
      onMouseEnter={() => {
        setHover(true);
        setVisibleInfo(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setVisibleInfo(false);
      }}
    >
      <img
        className={`cursor-pointer w-full object-cover aspect-[3/4] ${visibleInfo ? "rounded-tr-lg rounded-tl-lg" : "rounded-lg"}`}
        src={game.capa}
        alt={game.titulo}
      />

      <div
        className="w-full overflow-hidden transition-all duration-300"
        style={{
          maxHeight: visibleInfo ? "100px" : "0px",
          opacity: visibleInfo ? 1 : 0,
        }}
      >
        <p
          className={`pt-1 font-medium text-[18px] ${hover ? "text-black" : "text-gray-500"}`}
        >
          {game.titulo}
        </p>
        <p
          className={`pb-2 text-[14px] ${hover ? "text-black" : "text-gray-500"}`}
        >
          {new Date(game.data_lancamento).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
