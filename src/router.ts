import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/code', (req: Request, res: Response) => {
    const currentTime = new Date().getTime();
    const userId = uuidv4();
    res.json({ code: currentTime, userId: userId });
});

export default router;