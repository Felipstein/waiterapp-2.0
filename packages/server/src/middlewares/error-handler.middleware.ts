/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { APIError } from '../errors/api.error';

/**
 * Trata todos os erros lançados durante as requisições da aplicação.
 */
export function errorHandler(error: APIError | Error, req: Request, res: Response, next: NextFunction) {

  if(error instanceof APIError) {
    return res.status(error.statusCode).json({ error_name: error.name, error_feedback: error.message });
  }

  console.error('############ ERROR HANDLER ############');
  console.error(error);
  console.error('############ ERROR HANDLER ############');

  return res.status(500).json({ error_name: error.name, error_feedback: error.message });
}
