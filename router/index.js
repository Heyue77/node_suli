const express = require("express");
const router = express.Router();
const { formatArrayToObj } = require("../utils");
// 获取models目录下equipment文件导出的Equipment模型对象
const Equipment = require("../models/equipment");
const News = require("../models/news");
const Honour = require("../models/honour");
const Product = require("../models/product");
const Product_class = require("../models/product_class");
// const multer = require("multer");
// const path = require("path");

//访问根路径来到首页
router.get("/", async (req, res) => {
	//荣誉资质数据
	var honourResult = await Honour.find().limit(4).sort({ id: 1 });
	//新闻中心数据
	var newsResult = await News.find().limit(3).sort({ id: 1 });
	//实验中心数据
	var expResult = await Equipment.find().sort({ id: 1 });
	res.render("index.html", { expResult, honourResult, newsResult });
});
//关于苏立部分开始
router.get("/about", (req, res) => {
	res.render("aboutSu.html");
});
router.get("/s2", (req, res) => {
	res.render("s2.html");
});
router.get("/s3", async (req, res) => {
	const result = await Honour.find();
	// console.log(result);
	res.render("s3.html", { result });
});
router.get("/s4", (req, res) => {
	res.render("s4.html");
});
router.get("/about/n1/:id", async (req, res) => {
	const id = req.params["id"];
	const result = await Honour.findById(id);
	res.render("about/n1.html", { honour: result });
});
//关于苏立部分结束


//新闻部分开始
router.get("/news", async (req, res) => {
    let result = await News.find().sort({ id: 1 });
    // console.log(result)
    res.render("news.html", { result });
})
router.get("/news/tradeNews", (req, res) => {
    res.render("news/tradeNews.html")
})
router.get("/news/template/:id", async (req, res) => {
    var id = req.params["id"]
    // console.log(id);
    res.type('html');
    let result = await News.findById(id);
    // console.log(result)
    res.render("news/template.html", { result });
    return;

});
//新闻部分结束

//产品展示部分开始
router.get("/product", async (req, res) => {
    let product = await Product.find();
    let result = await Product_class.find({ name: "产品展示" });
    let product_class = result[0];
    // console.log(product_class);  //{ _id: new ObjectId("616d687598b65a1f54b9ffa2"), name: '产品展示' }
    res.render("product.html", { product, product_class });
})
//产品展示部分结束

//产品一级分类页面开始
router.get("/product01", async (req, res) => {
    let product = await Product.find({ category: 1 });
    let result = await Product_class.find({ name: "清洁热能" });
    let product_class = result[0];
    res.render("product.html", { product, product_class });
})
router.get("/product02", async (req, res) => {
    let product = await Product.find({ category: 2 });
    let result = await Product_class.find({ name: "健康电器" });
    let product_class = result[0];
    res.render("product.html", { product, product_class });
})
router.get("/product03", async (req, res) => {
    let product = await Product.find({ category: 3 });
    let result = await Product_class.find({ name: "电热部件" });
    let product_class = result[0];
    res.render("product.html", { product, product_class });
})
//产品一级分类页面结束

//产品二级详情页面开始
router.get("/product/:id", async (req, res) => {
    var id = req.params["id"];
    var result = await Product.findById(id);
    res.render("product/detail.html", { product: result });
})
//产品二级详情页面结束


//实验部分开始
router.get("/exp", async (req, res) => {
    let equipments = await Equipment.find();
    res.render("exp.html", { equipments });
})
//实验部分结束

// 实验中心二级详情页开始
router.get("/exp/:id", async (req, res) => {
    var id = req.params["id"];
    var result = await Equipment.findById(id);
    res.render("exp/detail.html", { equipment: result });
});
// 实验中心二级详情页结束

//招聘部分开始
router.get("/recruit", (req, res) => {

	res.render("recruit.html");
});
//招聘部分结束

//招聘部分二级人才招聘页面开始
router.get("/recruit/demand", (req, res) => {
    res.render("recruit/demand.html");
})
//招聘部分二级人才招聘页面结束


//联系部分开始
router.get("/contact", (req, res) => {

	res.render("contact.html");
});
//联系部分结束

module.exports = router;
