const mongoose = require("mongoose");
var newsSchema = new mongoose.Schema({
	title: String,
	created_person: {
		type: String,
		defalut: "安徽苏立科技"
	},
	created_company: {
		type: String,
		defalut: "安徽苏立科技股份有限公司"
	},
	created_time: {
		type: Date,
		// default: Date.now
	},
	view_num: {
		type: Number,
		default: 200
	},
  content:String
});

var News = mongoose.model("news", newsSchema);

//导出
module.exports = News;
