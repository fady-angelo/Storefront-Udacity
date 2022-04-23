import { Request, Response } from 'express';
import UserModel from '../models/user.model';
const userModel = new UserModel();
// CREATE USER END POINT
const CreateUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.create(req.body);
    res.json({
      message: 'User added',
      data: { ...user },
    });
  } catch (error) {
    res.send(error);
  }
};
// GET ALL USERS
const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.getMany();
    res.json({
      message: 'recieved successfully',
      data: users,
    });
  } catch (error) {
    res.send(error);
  }
};

// GET USER
const GetUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.getOne(req.params.id as unknown as string);
    res.json({
      message: 'user recieved successfully',
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

const UpdateUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.updateOne(req.body);
    res.json({
      message: 'user updated successfully',
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

const DeleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.deleteOne(req.params.id as unknown as string);
    res.json({
      message: 'user deleted successfully',
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

export { CreateUser, GetAllUsers, GetUser, UpdateUser, DeleteUser };
