import pool from "../../config/pool.js";

const GamePlatformRepository = {
  async create(gameP) {
    return await pool.execute(
      `INSERT INTO game_platform(platform, game) VALUES(?,?)`,
      [gameP.platform, gameP.game],
    );
  },

  async update(gameP) {
    return await pool.execute(
      `UPDATE game_platform SET platform=?, game=? WHERE id=?`,
      [gameP.platform, gameP.game, gameP.id],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM game_platform WHERE id=?`, [id]);
  },


  
  async getById(id) {
    const [gameP] = await pool.execute(
      `SELECT * FROM game_platform WHERE id=?`,
      [id],
    );
    return gameP[0];
  },

  async getAll() {
    const [gameP] = await pool.execute(`SELECT * FROM game_platform`);
    return gameP;
  },
};

export default GamePlatformRepository;
