import pool from "../../config/pool.js";

const SessionRepository = {
  async create(session) {
    return await pool.execute(
      `INSERT INTO session(user_game_platform, data, duracao_min, progresso, comentario) VALUES(?, ?, ?, ?, ?)`,
      [
        session.user_game_platform,
        session.data,
        session.duracao_min,
        session.progresso,
        session.comentario ?? null,
      ],
    );
  },
  async update(session) {
    return await pool.execute(
      `UPDATE session SET user_game_platform=?, data=?, duracao_min=?, progresso=?, comentario=? WHERE id=?`,
      [
        session.user_game_platform,
        session.data,
        session.duracao_min,
        session.progresso,
        session.comentario,
        session.id,
      ],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM session WHERE id=?`, [id]);
  },

  async getById(id) {
    const [session] = await pool.execute(`SELECT * FROM session WHERE id=?`, [
      id,
    ]);
    return session[0];
  },
  async getAll() {
    const [session] = await pool.execute(`SELECT * FROM session;`);
    return session;
  },
};

export default SessionRepository;
