import { Router } from 'express';
import authRouter from '../routers/auth.router';
import userRouter from '../routers/user.router';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
