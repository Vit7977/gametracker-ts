import PlatformRouter from "./features/platform/routes";
import UserRouter from "./features/user/routes";

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
