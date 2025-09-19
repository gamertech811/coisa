import mysql from 'mysql2/promise';


const configuration = {
    host: 'localhost',
    user: 'root',
    password: 'oi0ioi0i',
    database: 'teste',
};


export const getConnection = async  () => {
    return mysql.createConnection(configuration);
};
