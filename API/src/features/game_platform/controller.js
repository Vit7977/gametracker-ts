import * as response from "../../utils/response.js";
import GamePlatformService from "./service.js";

const GamePlatformController = {
  async create(req, res) {
    try {
      await GamePlatformService.create(req.body);
      return response.created(res, {
        message: "Jogo em plataform criado com sucesso!",
      });
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
      const gameP = await GamePlatformService.getById(id);

      if (!gameP) {
        return response.notFound(res, {
          message: "Jogo em plataforma não encontrado!",
        });
      }

      const data = { ...gameP, ...req.body, id };
      await GamePlatformService.update(data);
      return response.success(res, {
        message: "Jogo em plataforma atualizado com sucesso!",
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
      const gameP = await GamePlatformService.getById(id);

      if (!gameP) {
        return response.notFound(res, {
          message: "Jogo em plataforma não encontrado!",
        });
      }

      await GamePlatformService.delete(id);
      return response.success(res, {
        message: "Jogo em plataforma deletado com sucesso!",
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
      const gameP = await GamePlatformService.getById(id);

      if (!gameP) {
        return response.notFound(res, {
          message: "Jogo em plataforma não encontrado!",
        });
      }

      return response.success(res, {
        message: "Jogo em plataforma consultado com sucesso!",
        data: gameP,
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
      const gameP = await GamePlatformService.getAll();

      if (!gameP.length) {
        return response.notFound(res, {
          message: "Jogos em plataforma não encontrados!",
        });
      }

      return response.success(res, {
        message: "Jogos em plataforma consultados com sucesso!",
        data: gameP,
      });
    } catch (error) {
      return response.error(res, {
        message: "Erro interno!",
        error: error.message,
      });
    }
  },
};

export default GamePlatformController;
