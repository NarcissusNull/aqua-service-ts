// src/app.ts
import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.get('/api/code', (req: Request, res: Response) => {
    const currentTime = new Date().getTime();
    const userId = uuidv4();
    res.json({ code: currentTime, userId: userId });
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
