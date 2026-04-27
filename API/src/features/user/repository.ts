import { RowDataPacket } from "mysql2";
import pool from "../../config/pool";
import type { User } from "./model";

const UserRepository = {
  async createUser(user: User) {
    return await pool.execute(
      `INSERT INTO user(nome, email, senha, avatar) VALUES(?, ?, ?, ?);`,
      [user.nome, user.email, user.senha, user.avatar || null],
    );
  },

  async getAllUsers(): Promise<RowDataPacket[]> {
    const [users] = await pool.execute<RowDataPacket[]>(`SELECT * FROM user;`);
    return users;
  },
};

export default UserRepository;
