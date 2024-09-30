import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myproject",
  port:3306,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

export default connection;

export function destroyConnection() {
  connection.end();
}
