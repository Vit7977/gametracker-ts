import { Request, Response } from "express";
import UserService from "./service";
import * as response from "../../utils/response";

const UserController = {
  async createUser(req: Request, res: Response) {
    await UserService.createUser(req.body);
    return response.created(res, { message: "Usuário criado com sucesso!" });
  },

  async getAllUsers(_: Request, res: Response) {
    const data = await UserService.getAllUsers();

    if (!data.length) {
      return response.notFound(res, { message: "Usuários não encontrados!" });
    }

    return response.success(res, {
      message: "Usuários consultados com sucesso!",
      data,
    });
  },
};

export default UserController;
