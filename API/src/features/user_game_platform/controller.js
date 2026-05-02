import * as response from "../../utils/response.js";
import UGPService from "./service.js";

const UGPController = {
  async create(req, res) {
    try {
      await UGPService.create(req.body);
      return response.created(res, {
        message: "'User_Game_Platform' criado com sucesso!",
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
      const ugp = await UGPService.getById(id);

      if (!ugp) {
        return response.notFound(res, {
          message: "'User_Game_Platform' não encontrado!",
        });
      }

      const data = { ...ugp, ...req.body, id };
      await UGPService.update(data);
      return response.success(res, {
        message: "'User_Game_Platform' atualizado com sucesso!",
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

      const ugp = await UGPService.getById(id);

      if (!ugp) {
        return response.notFound(res, {
          message: "'User_Game_Platform' não encontrado!",
        });
      }

      await UGPService.delete(id);
      return response.success(res, {
        message: "'User_Game_Platform' deletado com sucesso!",
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
      const data = await UGPService.getById(id);

      if (!data) {
        return response.notFound(res, {
          message: "'User_Game_Platform' não encontrado!",
        });
      }

      return response.success(res, {
        message: "'User_Game_Platform' consultado com sucesso!",
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
      const data = await UGPService.getAll();

      if (!data.length) {
        return response.notFound(res, {
          message: "'User_Game_Platform' não encontrados!",
        });
      }

      return response.success(res, {
        message: "'User_Game_Platform' consultados com sucesso!",
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

export default UGPController;
