import { RowDataPacket } from "mysql2";
import pool from "../../config/pool";
import type { Platform } from "./model";

const PlatformRepository = {
  async createPlatform(platform: Platform) {
    return await pool.execute(
      `INSERT INTO platform(nome, logo) VALUES(?, ?);`,
      [platform.nome, platform.logo],
    );
  },

  async updatePlatform(platform: Platform) {
    return await pool.execute(`UPDATE platform SET nome=?, logo=? WHERE id=?`, [
      platform.nome,
      platform.logo,
      platform.id,
    ]);
  },

  async deletePlatform(id: number) {
    return await pool.execute(`DELETE FROM platform WHERE id=?`, [id]);
  },

  async getPlatformById(id: number): Promise<RowDataPacket[]> {
    const [platform] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM platform WHERE id = ?`,
      [id],
    );
    return platform;
  },

  async getAllPlatforms(): Promise<RowDataPacket[]> {
    const [platforms] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM platform;`,
    );
    return platforms;
  },
};

export default PlatformRepository;
