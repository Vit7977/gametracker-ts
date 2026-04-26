import { Response } from "express";
import { RowDataPacket } from "mysql2";

const sendResponse = (
  res: Response,
  {
    success = true,
    status = 200,
    message = "Operação realizada com sucesso!",
    error = "",
    data = null,
    quant = null,
  }: {
    success?: boolean;
    status?: number;
    message?: string;
    error?: string;
    data?: unknown;
    quant?: number | null;
  } = {},
) => {
  return res.status(status).json({
    success,
    status,
    message,
    error,
    data,
    quant: Array.isArray(data) ? data.length : (quant ?? (data ? 1 : 0)),
  });
};

export const success = (
  res: Response,
  {
    message = "Operação realizada com sucesso",
    data,
  }: { message?: string; data?: unknown } = {},
) => {
  return sendResponse(res, { success: true, status: 200, message, data });
};

export const notFound = (
  res: Response,
  { message = "Recurso não encontrado" }: { message?: string } = {},
) => {
  return sendResponse(res, { success: false, status: 404, message });
};

export const created = (
  res: Response,
  {
    message = "Recurso criado com sucesso",
    data,
  }: { message?: string; data?: unknown } = {},
) => {
  return sendResponse(res, { success: true, status: 201, message, data });
};

export const error = (
  res: Response,
  {
    status = 500,
    message = "Erro interno do servidor",
    data,
  }: { status?: number; message?: string; data?: unknown } = {},
) => {
  return sendResponse(res, {
    success: false,
    status,
    message,
    error: message,
    data,
  });
};
