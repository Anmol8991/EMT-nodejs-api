const mysql = require("mysql2");
// Setting up the Db connection
const pool = mysql.createPool({
    host:  process.env.DB_HOST,
    port: process.env.DB_PORT,
    // socketPath: process.env.DB_PATH,
    user:  process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB,
    // connectTimeout: 20000,
    waitForConnections: true,
    connectionLimit: 10, // Maximum number of connections in the pool
    queueLimit: 0
  });

pool.getConnection((err, conn) => {
  if(err) {
    console.log("Error connecting Db: ",err)
  }else{
    console.log(" Database Connected successfully!", conn.config)
    // Release the connection when done with it.
    conn.release();
  }
})
// now get a Promise wrapped instance of that pool
module.exports = pool.promise();
