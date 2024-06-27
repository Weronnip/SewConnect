import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'demofort',
    port: 3306,
    database: 'SewConnection',
});

export const db = drizzle(connection);

try {
    console.log('The database successfully connected')
} catch (error) {
    console.log(`error: ${error}`);
   
}

