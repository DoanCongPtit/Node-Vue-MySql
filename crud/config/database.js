import mysql from "mysql2";
   
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'demo_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
  
export default db;