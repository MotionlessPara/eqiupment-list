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
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.post("/equipment", (req, res) => {
	console.log("POST", "/equipment", req.query, req.body);
	// connection.connect();
	let sql = "insert into Equipment values()";
	res.send("lalala");
	res.end();
	// connection.query(sql , (err, result) => {
	// 	if(err) {
	// 		return;
	// 	}
	// 	console.log(result);
	// 	res.send(result);
	// });
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