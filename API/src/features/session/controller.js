import * as response from "../../utils/response.js";
import SessionService from "./service.js";

const SessionController = {
  async create(req, res) {
    try {
      await SessionService.create(req.body);
      return response.created(res, { message: "Sessão criada com sucesso!" });
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
      const session = await SessionService.getById(id);

      if (!session) {
        return response.notFound(res, { message: "Sessão não encontrada!" });
      }

      const data = { ...session, ...req.body, id };
      await SessionService.update(data);
      return response.success(res, {
        message: "Sessão atualizada com sucesso!",
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
      const session = await SessionService.getById(id);

      if (!session) {
        return response.notFound(res, { message: "Sessão não encontrada!" });
      }

      await SessionService.delete(id);
      return response.success(res, {
        message: "Sessão deletada com sucesso!",
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
      const data = await SessionService.getById(id);

      if (!data) {
        return response.notFound(res, { message: "Sessão não encontrada!" });
      }

      return response.success(res, {
        message: "Sessão consultada com sucesso!",
        data,
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
      const data = await SessionService.getAll();

      if (!data.length) {
        return response.notFound(res, { message: "Sessões não encontradas!" });
      }

      return response.success(res, {
        message: "Sessões consultadas com sucesso!",
        data,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },
};

export default SessionController;
