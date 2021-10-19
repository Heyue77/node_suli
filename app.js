const express = require("express");
const router = require("./router/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const app = express();

// 配置public,node_modules为静态资源
app.use("/node_modules", express.static("./node_modules"));
app.use("/public", express.static("./public"));

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置art-template
app.engine("html", require("express-art-template"));
app.set("views", __dirname + "/views");

// 连接mongoose
mongoose.connect("mongodb://localhost:27017/suLi");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("连接成功");
});

//配置session中间件
app.use(
	expressSession({
		name: "sessionID",
		secret: "secret",
		resave: false,
		rolling: true,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 3
		}
	})
);
app.use("/", router);

app.listen(8000, () => {
	console.log("8000端口已启动");
});
