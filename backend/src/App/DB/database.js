import mysql from 'mysql2/promise';
import { ConfigDB } from '../Config/config';

export const connect = async () => {
    return await mysql.createConnection(ConfigDB);
}
