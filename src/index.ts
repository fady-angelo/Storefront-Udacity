import config from './config';
import express, {
  application,
  Request,
  request,
  Response,
  response,
} from 'express';
import error from './middlewares/error.middleware';
import db from './database';
const app = express();
app.use(express.json());
app.use(error);
db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then((res) => {
      console.log(res.rows);
      client.release();
    })
    .catch((err) => {
      console.log(err.stack);
      client.release();
    });
});
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Page not found' });
});
app.listen(config.port);

export default app;
