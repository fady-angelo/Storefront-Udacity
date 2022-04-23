import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_PORT,
  POSTGRES_USER,
  BCRYPT_PASSWORD,
  SALT_ROUNDS,
} = process.env;

export default {
  port: PORT,
  host: POSTGRES_HOST,
  password: POSTGRES_PASSWORD,
  database: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
  POSTGRES_DB_TEST,
  dbport: POSTGRES_PORT,
  user: POSTGRES_USER,
  pepper: BCRYPT_PASSWORD,
  salt: SALT_ROUNDS,
};
