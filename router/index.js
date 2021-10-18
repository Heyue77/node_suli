const express = require("express");
const router = express.Router();
const News = require("../models/news");
const Equipment = require("../models/equipment");
const Honour = require("../models/honour");
const { Mongoose } = require("mongoose");

//访问根路径来到首页
router.get("/", async (req, res) => {
    //荣誉资质数据
    var honourResult = await Honour.find().limit(4).sort({ id: 1 });
    //新闻中心数据
    var newsResult = await News.find().limit(3).sort({ id: 1 });
    //实验中心数据
    var expResult = await Equipment.find().sort({ id: 1 });
    res.render("index.html", { expResult, honourResult, newsResult });
})
//关于苏立部分开始
router.get("/aboutSu", (req, res) => {
    res.render("aboutSu.html");
})
//关于苏立部分结束

//产品部分开始
router.get("/product", (req, res) => {

    res.render("product.html");
})
//产品部分结束

//新闻部分开始
router.get("/news", async (req, res) => {
    let result = await News.find().sort({ id: 1 });
    console.log(result)
    res.render("news.html", { result });
})
router.get("/news/tradeNews", (req, res) => {
    res.render("news/tradeNews.html")
})
router.get("/news/template/:id", async (req, res) => {
    var id = req.params["id"]
    console.log(id);
    res.type('html');
    let result = await News.findById(id);
    console.log(result)
    res.render("news/template.html", { result });
    return;

})
//新闻部分结束

//实验部分开始
router.get("/exp", (req, res) => {
    res.render("exp.html");
})
//实验部分结束

//招聘部分开始
router.get("/recruit", (req, res) => {
    res.render("recruit.html");
})
//招聘部分结束

//联系部分开始
router.get("/contact", (req, res) => {
    res.render("contact.html");
})
//联系部分结束

module.exports = router;