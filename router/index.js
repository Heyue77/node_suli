const express = require("express");
const router = express.Router();
const News = require("../models/news");
const { Mongoose } = require("mongoose");

//访问根路径来到首页
router.get("/",(req,res)=>{
    res.render("index.html");
})
//关于苏立部分开始
router.get("/aboutSu",(req,res)=>{
    res.render("aboutSu.html");
})
//关于苏立部分结束

//产品部分开始
router.get("/product",(req,res)=>{
    res.render("product.html");
})
//产品部分结束

//新闻部分开始
router.get("/news",(req,res)=>{
    res.render("news.html");
})
router.get("/news/news12",async (req,res)=>{
    res.type('html');
    var result=await News.find();
    // var time=News.aggregate({
    //     $project: {
    //         "new_string": {
    //             $substr: ['$created_time', 0 , 7 ]
    //         }
    //     }
    // })
    res.render("news/news12.html",{result});
    return;
   
})
//新闻部分结束

//实验部分开始
router.get("/exp",(req,res)=>{
    res.render("exp.html");
})
//实验部分结束

//招聘部分开始
router.get("/recruit",(req,res)=>{
    res.render("recruit.html");
})
//招聘部分结束

//联系部分开始
router.get("/contact",(req,res)=>{
    res.render("contact.html");
})
//联系部分结束

module.exports = router;