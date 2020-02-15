var mysql = require("mysql");
if (process.env.JAWS_CONNECTION_STRING) {
    connection = mysql.createConnection(process.env.JAWS_CONNECTION_STRING);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}
connection.connect();
module.exports = connection;

