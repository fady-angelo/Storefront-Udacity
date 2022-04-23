import express, {
  application,
  Request,
  request,
  Response,
  response,
} from 'express';
import error from './middlewares/error.middleware';
const app = express();
app.use(express.json());
app.use(error);
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Page not found' });
});
app.listen(3000);

export default app;
