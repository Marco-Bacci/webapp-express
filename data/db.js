const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connessione al db
connection.connect((err) => {
  if (err) {
    console.log("errore nella connessione al db");
  } else {
    console.log("connessione al db avvenuta correttamente");
  }
});

module.exports = connection;