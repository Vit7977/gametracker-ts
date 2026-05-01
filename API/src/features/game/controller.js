import * as response from "../../utils/response.js";
import GameService from "./service.js";

const GameController = {
  async create(req, res) {
    await GameService.create(req.body);
    return response.created(res, { message: "Jogo criado com sucesso!" });
  },

  async update(req, res) {
    const { id } = req.params;
    const game = await GameService.getById(id);

    if (!game) {
      return response.notFound(res, { message: "Jogo não encontrado!" });
    }

    const data = { ...game, ...req.body, id };
    await GameService.update(data);
    return response.success(res, { message: "Jogo atualizado com sucesso!" });
  },

  async delete(req, res) {
    const { id } = req.params;
    const game = await GameService.getById(id);

    if (!game) {
      return response.notFound(res, { message: "Jogo não encontrado!" });
    }

    await GameService.delete(id);
    return response.success(res, { message: "Jogo deletado com sucesso!" });
  },

  async getAll(_, res) {
    const data = await GameService.getAll();

    if (!data.length) {
      return response.notFound(res, { message: "Jogos não encontrados!" });
    }

    return response.success(res, {
      message: "Jogos consultados com sucesso!",
      data,
    });
  },
  async getById(req, res) {
    const { id } = req.params;
    const data = await GameService.getById(id);

    if (!data) {
      return response.notFound(res, { message: "Jogo não encontrado!" });
    }

    return response.success(res, {
      message: "Jogo consultado com sucesso!",
      data,
    });
  },
};

export default GameController;
