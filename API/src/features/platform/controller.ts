import { Response, Request } from "express";
import * as response from "../../utils/response";
import PlatformService from "./service";

const PlatformController = {
  async createPlatform(req: Request, res: Response) {
    await PlatformService.createPlatform(req.body);
    return response.created(res, { message: "Plataforma criada com sucesso!" });
  },

  async updatePlatform(req: Request, res: Response) {
    const id = Number(req.params.id);
    const dbPlatform = await PlatformService.getPlatformById(id);

    if (!dbPlatform.length) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    const data = { ...dbPlatform[0], ...req.body, id };

    await PlatformService.updatePlatform(data);
    return response.success(res, {
      message: "Plataforma atualizada com sucesso!",
    });
  },

  async deletePlatform(req: Request, res: Response) {
    const id = Number(req.params.id);
    const dbPlatform = await PlatformService.getPlatformById(id);

    if (!dbPlatform.length) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    await PlatformService.deletePlatform(id);
    return response.success(res, {
      message: "Plataforma deletada com sucesso!",
    });
  },

  async getPlatformById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await PlatformService.getPlatformById(id);

    if (!data.length) {
      return response.notFound(res, { message: "Plataforma não encontrada!" });
    }

    return response.success(res, {
      message: "Plataforma consultada com sucesso!",
      data,
    });
  },

  async getAllPlatforms(_: Request, res: Response) {
    const data = await PlatformService.getAllPlatforms();
    return response.success(res, {
      message: "Plataformas consultadas com sucesso!",
      data,
    });
  },
};

export default PlatformController;
