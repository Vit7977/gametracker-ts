import "dotenv/config";
import UserRepository from "./repository.js";
import { hashPass, validatePass } from "../../utils/passwordUtils.js";
import jwt from "jsonwebtoken";

const UserService = {
  async create(data) {
    const hashedPass = await hashPass(data.senha);
    return await UserRepository.create({ ...data, senha: hashedPass });
  },

  async update(data) {
    const hashedPass = await hashPass(data.senha);
    return await UserRepository.update({ ...data, senha: hashedPass });
  },

  async login(email, senha) {
    const user = await UserRepository.login(email);
    if (!user) return null;

    const matchPass = await validatePass(user.senha, senha);

    if (!matchPass) return null;

    const secret = process.env.JWT_SECRET;

    const expiresIn = process.env.JWT_EXPIRES;

    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.nome,
        userEmail: user.email,
        userAvatar: user.avatar,
        createdAt: user.created_at,
      },
      secret,
      {
        expiresIn,
      },
    );

    return { token };
  },

  async delete(id) {
    return await UserRepository.delete(id);
  },

  async getAll() {
    return await UserRepository.getAll();
  },

  async getById(id) {
    return await UserRepository.getById(id);
  },
};

export default UserService;
