import { Router } from 'express';
import {
  CreateUser,
  GetAllUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
  authenticate,
} from '../../controllers/users.controller';
const routes = Router();
routes.post('/', CreateUser);
routes.get('/GetAllUsers', GetAllUsers);
routes.get('/GetUser/:id', GetUser);
routes.patch('/UpdateUser/:id', UpdateUser);
routes.delete('/DeleteUser/:id', DeleteUser);
routes.post('/authentication', authenticate);
export default routes;
