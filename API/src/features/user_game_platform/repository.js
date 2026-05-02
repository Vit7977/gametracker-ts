import pool from "../../config/pool.js";

const UGPRepository = {
  async create(ugp) {
    return await pool.execute(
      `INSERT INTO user_game_platform(user, game_platform, status, nota, ranking) 
      VALUES(?, ?, ?, ?, ?)`,
      [ugp.user, ugp.game_platform, ugp.status, ugp.nota, ugp.ranking],
    );
  },
  async update(ugp) {
    return await pool.execute(
      `UPDATE user_game_platform SET user=?, game_platform=?, status=?, nota=?, ranking=? WHERE id=?`,
      [ugp.user, ugp.game_platform, ugp.status, ugp.nota, ugp.ranking, ugp.id],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM user_game_platform WHERE id=?`, [
      id,
    ]);
  },
  async getById(id) {
    const [ugp] = await pool.execute(
      `SELECT * FROM user_game_platform WHERE id=?`,
      [id],
    );
    return ugp[0];
  },
  async getAll() {
    const [ugps] = await pool.execute(`SELECT * FROM user_game_platform`);
    return ugps;
  },
};

export default UGPRepository;
