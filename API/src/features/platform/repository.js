import pool from "../../config/pool.js";

const PlatformRepository = {
  async create(platform) {
    return await pool.execute(
      `INSERT INTO platform(nome, logo) VALUES(?, ?);`,
      [platform.nome, platform.logo],
    );
  },

  async update(platform) {
    return await pool.execute(`UPDATE platform SET nome=?, logo=? WHERE id=?`, [
      platform.nome,
      platform.logo,
      platform.id,
    ]);
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM platform WHERE id=?`, [id]);
  },

  async getAll() {
    const [platforms] = await pool.execute(`SELECT * FROM platform;`);
    return platforms;
  },

  async getById(id) {
    const [platform] = await pool.execute(
      `SELECT * FROM platform WHERE id = ?`,
      [id],
    );
    return platform[0];
  },
};

export default PlatformRepository;
