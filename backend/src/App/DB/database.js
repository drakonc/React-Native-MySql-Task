import mysql from 'mysql2/promise';
import { config } from '../Config/config';

export const connect = async () => {
    return await mysql.createConnection(config);
}
