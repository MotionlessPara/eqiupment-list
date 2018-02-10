import Express from 'express';
import Mysql from 'mysql';
let app = Express();
let connection = Mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xiedong",
	port: "3306",
	database: "Equipment"
});
app.get("/", )