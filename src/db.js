import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('eventos_retrasados_pandemia.db', (err) => {
    if(err){
        console.log(err.message)
        throw err
    } else{
        console.log('Connected to the database');
    }
});

export default db;