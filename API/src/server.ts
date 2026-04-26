import express from "express";
import cors from "cors";
import "dotenv/config";

import PlatformRouter from "./features/platform/routes";

const PORT = process.env.API_PORT;

const api = express();

api.use(cors());
api.use(express.json());

api.use("/api/platform", PlatformRouter);

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
