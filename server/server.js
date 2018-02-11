let express = require('express');
let mysql = require('mysql');
let app = express();
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xiedong",
	port: "3306",
	database: "EquipmentList"
});
connection.connect();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);
    else  next();
});
app.post("/equipment", (req, res) => {
	console.log("POST", "/equipment", req.query, req.body, req.params);
	let sql = "insert into Equipment values(?,?,?,?)";
	let sqlParam = [req.query.name, req.query.count, req.query.describe, req.query.count];
	// res.send("lalala");
	console.log("POST", "/equipment", sql, sqlParam);
	connection.query(sql, sqlParam, (err, result) => {
		if(err) {
			console.log(err);
			res.send(err);
			return;
		}
		console.log(result);
		res.send(result);
	});
})

app.delete("/equipment", (req, res) => {
	connection.connect();
	connection.query(sql, (err, result) => {
		if(err) {
			return;
		}
		console.log(result);
	})
})

let server = app.listen(8000, () => {console.log("server start")});