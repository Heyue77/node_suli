const mongoose = require("mongoose");
var honourScheme = new mongoose.Schema({
    title: String,
    img: {
        type: String,
        defalut: "../public/img/juren.jpg",
    },
    created_person: {
        type: String,
        defalut: "安徽苏立科技",
    },
    created_company: {
        type: String,
        defalut: "安徽苏立科技股份有限公司",
    },
    created_time: {
        type: Date,
        default: "2021/8/4 15:57:07",
    },
    view_num: {
        type: Number,
        default: 374,
    },
});

var Honour = mongoose.model("Honour", honourScheme);
module.exports = Honour;