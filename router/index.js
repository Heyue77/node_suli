const express = require("express");
const router = express.Router();
const News = require("../models/news");
const Honour = require("../models/honour")
const { Mongoose } = require("mongoose");

//访问根路径来到首页
router.get("/", (req, res) => {
        res.render("index.html");
    })
    //关于苏立部分开始
router.get("/aboutSu", (req, res) => {
    res.render("aboutSu.html");
})
router.get("/s2", (req, res) => {
    res.render("s2.html")
})
router.get("/s3", async(req, res) => {
    const result = await Honour.find();
    // console.log(result);
    res.render("s3.html", { result })
})
router.get("/s4", (req, res) => {
    res.render("s4.html")
})
router.get("/about/n1/:id", async(req, res) => {
        const id = req.params['id']
        const result = await Honour.findById(id);
        res.render("about/n1.html", { honour: result })

    })
    //关于苏立部分结束

//产品部分开始
router.get("/product", (req, res) => {
        res.render("product.html");
    })
    //产品部分结束

//新闻部分开始
router.get("/news", (req, res) => {
    res.render("news.html");
})
router.get("/news/news12", async(req, res) => {
        res.type('html');
        var result = await News.find();
        // var time=News.aggregate({
        //     $project: {
        //         "new_string": {
        //             $substr: ['$created_time', 0 , 7 ]
        //         }
        //     }
        // })
        res.render("news/news12.html", { result });
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