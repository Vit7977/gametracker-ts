import express from "express";
import cors from "cors";
import "dotenv/config";

import { routes } from "./routes.js";

const PORT = process.env.API_PORT;

const api = express();

api.use(cors());
api.use(express.json());

routes.forEach(({ path, router }) => {
  api.use(path, router);
});

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
