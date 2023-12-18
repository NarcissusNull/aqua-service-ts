import * as express from 'express';
import router from './router';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api', router)

export default app;