import PlatformRouter from "./features/platform/routes.js";
import UserRouter from "./features/user/routes.js";

export const routes = [
  {
    router: PlatformRouter,
    path: "/api/platform",
  },
  {
    router: UserRouter,
    path: "/api/user"
  }
];
