import pool from "../../config/pool.js";

const GameRepository = {
  async create(game) {
    return await pool.execute(
      `INSERT INTO game(titulo, capa, descricao, data_lancamento, genero, tempo_estimado) 
      VALUES(?, ?, ?, ?, ?, ?)`,
      [
        game.titulo,
        game.capa,
        game.descricao ?? null,
        game.data_lancamento,
        game.genero,
        game.tempo_estimado,
      ],
    );
  },

  async update(game) {
    return await pool.execute(
      `UPDATE game 
        SET titulo=?, capa=?, descricao=?, data_lancamento=?, genero=?, tempo_estimado=? 
        WHERE id=?`,
      [
        game.titulo,
        game.capa,
        game.descricao,
        game.data_lancamento,
        game.genero,
        game.tempo_estimado,
        game.id,
      ],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM game WHERE id=?`, [id]);
  },

  async getAll() {
    const [games] = await pool.execute(`SELECT * FROM game;`);
    return games;
  },

  async getById(id) {
    const [game] = await pool.execute(`SELECT * FROM game WHERE id=?`, [id]);
    return game[0];
  },
};

export default GameRepository;
