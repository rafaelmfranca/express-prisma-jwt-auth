import { Router } from 'express';
import rescue from 'express-rescue';
import authController from '../controllers/auth.controller';

const authRouter = Router();

authRouter.route('/').post(rescue(authController.authenticate));

export default authRouter;
