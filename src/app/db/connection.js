import mysql from 'mysql2/promise';


const configuration = {
    host: '192.168.195.232',
    user: '1info',
    password: '1info2024',
    database: 'blog',
};


export const getConnection = async  () => {
    return mysql.createConnection(configuration);
};
