import PlatformRouter from "./features/platform/routes.js";
import UserRouter from "./features/user/routes.js";
import GameRouter from "./features/game/routes.js";
import GamePlatformRouter from "./features/game_platform/routes.js";
import UGPRouter from "./features/user_game_platform/routes.js";
import SessionRouter from "./features/session/routes.js";

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
  {
    router: GamePlatformRouter,
    path: "/api/game.platform",
  },
  {
    router: UGPRouter,
    path: "/api/user.game.platform",
  },
  {
    router: SessionRouter,
    path: "/api/session",
  },
];
