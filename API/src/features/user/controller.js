import UserService from "./service.js";
import { validatePass } from "../../utils/passwordUtils.js";
import * as response from "../../utils/response.js";

const UserController = {
  async create(req, res) {
    try {
      await UserService.create(req.body);
      return response.created(res, { message: "Usuário criado com sucesso!" });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, { message: "Usuário não encontrado!" });
      }

      await UserService.update({ ...user, ...req.body, id });
      return response.success(res, {
        message: "Usuário atualizado com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, { message: "Usuário não encontrado!" });
      }
      await UserService.delete(id);
      return response.success(res, {
        message: "Usuário deletado com sucesso!",
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },

  async login(req, res) {
    try {
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
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },

  async getAll(_, res) {
    try {
      const data = await UserService.getAll();

      if (!data.length) {
        return response.notFound(res, { message: "Usuários não encontrados!" });
      }

      return response.success(res, {
        message: "Usuários consultados com sucesso!",
        data,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return response.notFound(res, { message: "Usuário não encontrado!" });
      }

      return response.success(res, {
        message: "Usuário consultado com sucesso!",
        data: user,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },
};

export default UserController;
