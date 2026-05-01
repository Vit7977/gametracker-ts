import * as response from "../../utils/response.js";
import PlatformService from "./service.js";

const PlatformController = {
  async createPlatform(req, res) {
    await PlatformService.createPlatform(req.body);
    return response.created(res, { message: "Plataforma criada com sucesso!" });
  },

  async updatePlatform(req, res) {
    const {id} = req.params;
    const platform = await PlatformService.getPlatformById(id);

    if (!platform) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    const data = { ...platform, ...req.body, id };

    await PlatformService.updatePlatform(data);
    return response.success(res, {
      message: "Plataforma atualizada com sucesso!",
    });
  },

  async deletePlatform(req, res) {
    const {id} = req.params;
    const platform = await PlatformService.getPlatformById(id);

    if (!platform) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    await PlatformService.deletePlatform(id);
    return response.success(res, {
      message: "Plataforma deletada com sucesso!",
    });
  },

  async getPlatformById(req, res) {
    const {id} = req.params;
    const data = await PlatformService.getPlatformById(id);

    if (!data) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    return response.success(res, {
      message: "Plataforma consultada com sucesso!",
      data,
    });
  },

  async getAllPlatforms(_, res) {
    const data = await PlatformService.getAllPlatforms();
    return response.success(res, {
      message: "Plataformas consultadas com sucesso!",
      data,
    });
  },
};

export default PlatformController;
