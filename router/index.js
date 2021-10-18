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
router.get("/views?/s1.html?", (req, res) => {
    res.render("s1.html")
})
router.get("/views?/s2.html?", (req, res) => {
    res.render("s2.html")
})
router.get("/views?/s3.html?", (req, res) => {
    res.render("s3.html")
})
router.get("/views?/s4.html?", (req, res) => {
    res.render("s4.html")
})
router.get("/about/n1.html?", async(req, res) => {

    const id = req.params['id']
    const result = await Honour.find(id)
    res.render("about/n1.html", { honour: result[0] })

})

router.get("/about/n2.html?", async(req, res) => {

    const id = req.params['id']
    const result = await Honour.find(id)
    res.render("about/n2.html", { honour: result[3] })

})

router.get("/about/n3.html?", async(req, res) => {

    const id = req.params['id']
    const result = await Honour.find(id)
    res.render("about/n3.html", { honour: result[7] })

})

router.get("/about/n4.html?", async(req, res) => {

    const id = req.params['id']
    const result = await Honour.find(id)
    res.render("about/n4.html", { honour: result[6] })

})

router.get("/about/n5.html?", async(req, res) => {

    const id = req.params['id']
    const result = await Honour.find(id)
    res.render("about/n5.html", { honour: result[2] })

})

router.get("/about/n6.html?", async(req, res) => {

    var id = req.params['id']
    var result = await Honour.find(id)
    res.render("about/n6.html", { honour: result[1] })

})

router.get("/about/n7.html?", async(req, res) => {

    var id = req.params['id']
    var result = await Honour.find(id)
    res.render("about/n7.html", { honour: result[8] })

})


router.get("/about/n8.html?", async(req, res) => {

    var id = req.params['id']
    var result = await Honour.find(id)
    res.render("about/n8.html", { honour: result[5] })

})

router.get("/about/n9.html?", async(req, res) => {

        var id = req.params['id']
        var result = await Honour.find(id)
        res.render("about/n9.html", { honour: result[4] })

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