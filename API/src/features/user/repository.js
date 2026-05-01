import pool from "../../config/pool.js";

const UserRepository = {
  async create(user) {
    return await pool.execute(
      `INSERT INTO user(nome, email, senha, avatar) VALUES(?, ?, ?, ?);`,
      [user.nome, user.email, user.senha, user.avatar || null],
    );
  },

  async update(user) {
    return await pool.execute(
      `UPDATE user SET nome=?, email=?, senha=?, avatar=? WHERE id=?`,
      [user.nome, user.email, user.senha, user.avatar, user.id],
    );
  },

  async delete(id) {
    return await pool.execute(`DELETE FROM user WHERE id=?`, [id]);
  },

  async login(email) {
    const [user] = await pool.execute(`SELECT * FROM user WHERE email=?`, [
      email,
    ]);
    return user[0];
  },

  async getAll() {
    const [users] = await pool.execute(`SELECT * FROM user;`);
    return users;
  },

  async getById(id) {
    const [user] = await pool.execute(`SELECT * FROM user WHERE id=?`, [id]);
    return user[0];
  },
};

export default UserRepository;
