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
app.post("/equipment", (req, res) => {
	console.log("POST", "/equipment", req.query);
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