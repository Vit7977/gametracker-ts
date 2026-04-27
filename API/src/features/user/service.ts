import UserRepository from "./repository";
import { hashPass } from "../../utils/passwordUtils";
import type { User } from "./model";

const UserService = {
  async createUser(data: User) {
    const hashedPass = await hashPass(data.senha);
    return await UserRepository.createUser({ ...data, senha: hashedPass });
  },

  async getAllUsers() {
    return await UserRepository.getAllUsers();
  },
};

export default UserService;
