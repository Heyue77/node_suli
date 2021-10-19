const express = require("express");
const router = express.Router();
const { formatArrayToObj } = require("../utils");
// 获取models目录下equipment文件导出的Equipment模型对象
const Equipment = require("../models/equipment");
const News = require("../models/news");
const Product = require("../models/product");
const Product_class = require("../models/product_class");
const multer = require("multer");
const path = require("path");
//访问根路径来到首页
router.get("/", (req, res) => {
    res.render("index.html");
})
//关于苏立部分开始
router.get("/aboutSu", (req, res) => {
    res.render("aboutSu.html");
})
//关于苏立部分结束

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

//新闻部分开始
router.get("/news", async (req, res) => {
    let news = await News.find();
    res.render("news.html", { news });
})
//新闻部分结束

// 新闻二级详情页开始
router.get("/news/:id", async (req, res) => {
    var id = req.params["id"];
    var result = await News.findById(id);
    if (id == "616beab2b6e3663570b4daa7")
        res.render("news/detail.html", { news: result });
    else if (id == "616beab2b6e3663570b4daa8")
        res.render("news/detail2.html", { news: result });
});
// 新闻二级详情页结束

//实验部分开始
router.get("/exp", async (req, res) => {
    let equipments = await Equipment.find();
    res.render("exp.html", { equipments });
})
//实验部分结束

// 实验中心二级详情页开始
router.get("/exp/:id", async (req, res) => {
    var url=req.originalUrl;
    // console.log(url);  /exp/616d63d998b65a1f54b9ff6d
    var id = req.params["id"];
    var result = await Equipment.findById(id);
    // 更新关注度
    var update=  await Equipment.findByIdAndUpdate(
        id,
        { $inc: { view_num: 2 } },
        { new: true }
     );
    res.render("exp/detail.html", { equipment: result });
});
// 实验中心二级详情页结束

//招聘部分开始
router.get("/recruit", (req, res) => {
    res.render("recruit.html");
})
//招聘部分结束

//招聘部分二级人才招聘页面开始
router.get("/recruit/demand", (req, res) => {
    res.render("recruit/demand.html");
})
//招聘部分二级人才招聘页面结束


//联系部分开始
router.get("/contact", (req, res) => {
    res.render("contact.html");
})
//联系部分结束

module.exports = router;