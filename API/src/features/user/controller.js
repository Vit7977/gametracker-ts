import UserService from "./service.js";
import { validatePass } from "../../utils/passwordUtils.js";
import * as response from "../../utils/response.js";

const UserController = {
  async create(req, res) {
    await UserService.create(req.body);
    return response.created(res, { message: "Usuário criado com sucesso!" });
  },

  async update(req, res) {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user[0]) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }

    await UserService.update({ ...user, ...req.body, id });
    return response.success(res, {
      message: "Usuário atualizado com sucesso!",
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }
    await UserService.delete(id);
    return response.success(res, { message: "Usuário deletado com sucesso!" });
  },

  async login(req, res) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return response.badRequest(res, {
        message: "Email e senha são obrigatórios!",
      });
    }

    const token = await UserService.login(email, senha);

    if (!token) {
      return response.badRequest(res, { message: "Credenciais inválidas!" });
    }

    return response.success(res, {
      message: "Usuário logado com sucesso!",
      data: token,
    });
  },

  async getAll(_, res) {
    const data = await UserService.getAll();

    if (!data.length) {
      return response.notFound(res, { message: "Usuários não encontrados!" });
    }

    return response.success(res, {
      message: "Usuários consultados com sucesso!",
      data,
    });
  },

  async getById(req, res) {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) {
      return response.notFound(res, { message: "Usuário não encontrado!" });
    }

    return response.success(res, {
      message: "Usuário consultado com sucesso!",
      data: user,
    });
  },
};

export default UserController;
