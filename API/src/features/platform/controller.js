import * as response from "../../utils/response.js";
import PlatformService from "./service.js";

const PlatformController = {
  async create(req, res) {
    await PlatformService.create(req.body);
    return response.created(res, { message: "Plataforma criada com sucesso!" });
  },

  async update(req, res) {
    const { id } = req.params;
    const platform = await PlatformService.getById(id);

    if (!platform) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    const data = { ...platform, ...req.body, id };

    await PlatformService.update(data);
    return response.success(res, {
      message: "Plataforma atualizada com sucesso!",
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    const platform = await PlatformService.getById(id);

    if (!platform) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    await PlatformService.delete(id);
    return response.success(res, {
      message: "Plataforma deletada com sucesso!",
    });
  },

  async getAll(_, res) {
    const data = await PlatformService.getAll();

    if (!data.length) {
      return response.notFound(res, {
        message: "Plataformas não encontradas!",
      });
    }

    return response.success(res, {
      message: "Plataformas consultadas com sucesso!",
      data,
    });
  },
  
  async getById(req, res) {
    const { id } = req.params;
    const data = await PlatformService.getById(id);

    if (!data) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    return response.success(res, {
      message: "Plataforma consultada com sucesso!",
      data,
    });
  },
};

export default PlatformController;
