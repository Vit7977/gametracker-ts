import PlatformRouter from "./features/platform/routes.js";
import UserRouter from "./features/user/routes.js";
import GameRouter from "./features/game/routes.js";

export const routes = [
  {
    router: PlatformRouter,
    path: "/api/platform",
  },
  {
    router: UserRouter,
    path: "/api/user",
  },
  {
    router: GameRouter,
    path: "/api/game",
  },
];
