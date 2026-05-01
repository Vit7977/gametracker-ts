import pool from "../../config/pool.js";

const PlatformRepository = {
  async createPlatform(platform) {
    return await pool.execute(
      `INSERT INTO platform(nome, logo) VALUES(?, ?);`,
      [platform.nome, platform.logo],
    );
  },

  async updatePlatform(platform) {
    return await pool.execute(`UPDATE platform SET nome=?, logo=? WHERE id=?`, [
      platform.nome,
      platform.logo,
      platform.id,
    ]);
  },

  async deletePlatform(id) {
    return await pool.execute(`DELETE FROM platform WHERE id=?`, [id]);
  },

  async getPlatformById(id) {
    const [platform] = await pool.execute(
      `SELECT * FROM platform WHERE id = ?`,
      [id],
    );
    return platform[0];
  },

  async getAllPlatforms() {
    const [platforms] = await pool.execute(
      `SELECT * FROM platform;`,
    );
    return platforms;
  },
};

export default PlatformRepository;
