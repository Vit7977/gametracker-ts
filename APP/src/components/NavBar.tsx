import { FaHome } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <nav className="fixed flex justify-around bg-zinc-900 w-screen p-3">
      <a
        className="bg-sky-800 rounded-md p-2 transition-all duration-300
       hover:bg-sky-700 hover:scale-105
        active:bg-sky-950 active:scale-90"
        href="/home"
      >
        <span className="flex items-center gap-1 text-white">
          <FaHome />
          Home
        </span>
      </a>

      <a
        className="bg-sky-800 rounded-md p-2 transition-all duration-300
       hover:bg-sky-700 hover:scale-105
        active:bg-sky-950 active:scale-90"
        href="/jogos"
      >
        <span className="flex items-center gap-1 text-white">
          <IoLogoGameControllerB />
          Jogos
        </span>
      </a>

      <a
        className="bg-sky-800 rounded-full p-2 transition-all duration-300
       hover:bg-sky-700 hover:scale-105
        active:bg-sky-950 active:scale-90"
        href="/perfil"
      >
        <span className="flex items-center text-white text-2xl">
          <CgProfile />
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
