import { FaSadTear } from "react-icons/fa";

function NotFound() {
  return (
    <div className="h-screen bg-zinc-800 flex flex-col items-center justify-center">
      <h1 className="flex flex-row items-center font-bold gap-2 text-6xl text-white">
        404 <FaSadTear />
      </h1>
      <h1 className="text-white text-xl">PAGINA NÃO ENCONTRADA!</h1>
    </div>
  );
}

export default NotFound;
