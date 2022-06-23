import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../lib/prisma';

class UserController {
  async getById(req: Request, res: Response, next: NextFunction) {
    console.log(res.locals.payload); // just to see the payload

    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!user)
      return next({ status: StatusCodes.NOT_FOUND, message: 'User not found' });

    res.status(StatusCodes.OK).json({ name: user.name, email: user.email });
  }
}

export default new UserController();
