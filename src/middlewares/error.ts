import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal server error' });
};
