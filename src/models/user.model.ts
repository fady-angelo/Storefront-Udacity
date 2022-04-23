import User from '../types/user.type';
import db from '../database';
import bcrypt from 'bcrypt';
import config from '../config';
const hashpassword = (password: string) => {
  const salt = Number(config.salt);
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};
class UserModel {
  // CREATE USER MODEL
  async create(u: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO users (email,user_name,first_name,last_name,password)values($1,$2,$3,$4,$5) returning email,user_name,first_name,last_name `;
      const results = await connection.query(sql, [
        u.email,
        u.user_name,
        u.first_name,
        u.last_name,
        hashpassword(u.password),
      ]);
      connection.release();
      return results.rows[0];
    } catch (error) {
      throw new Error('unable to create user');
    }
  }
  // GET ALL USERS
  async getMany(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = `SELECT id,email,user_name,first_name,last_name from users `;
      const results = await connection.query(sql);
      connection.release();
      return results.rows;
    } catch (error) {
      throw new Error('unable to get users');
    }
  }

  // GET SPECIFIC USER
  async getOne(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `SELECT id,email,user_name,first_name,last_name from users WHERE id=($1) `;
      const results = await connection.query(sql, [id]);
      connection.release();
      return results.rows[0];
    } catch (error) {
      throw new Error('unable to get users');
    }
  }

  // UPDATE USE
  async updateOne(u: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE users Set email=$1,user_name$2,first_name$3,last_name$4,password$5) WHERE id=$6 returning id,email,user_name,first_name,last_name`;
      const results = await connection.query(sql, [
        u.email,
        u.user_name,
        u.first_name,
        u.last_name,
        hashpassword(u.password),
      ]);
      connection.release();
      return results.rows[0];
    } catch (error) {
      throw new Error('unable to update user');
    }
  }

  // DELETE USER

  async deleteOne(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM users WHERE id=($1) returning id,email,user_name,first_name,last_name `;
      const results = await connection.query(sql, [id]);
      connection.release();
      return results.rows[0];
    } catch (error) {
      throw new Error('unable to delete users');
    }
  }
}
export default UserModel;
