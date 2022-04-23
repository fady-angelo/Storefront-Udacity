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
import routes from './routes';
const app = express();
app.use(express.json());
app.use(error);
app.use(routes);

// app.use((_req: Request, res: Response) => {
//   res.status(404).json({ message: 'Page not found' });
// });
app.listen(config.port);

export default app;
