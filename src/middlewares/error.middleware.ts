import { NextFunction, Request, Response } from 'express';

const error = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = error.message || 'server is down';

  res.status(500).json({ status: message });
};
export default error;
