import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  port: Number(config.dbport),
  max: 4,
});
pool.on('error', (error: Error) => {
  console.error(error.message);
});

export default pool;
