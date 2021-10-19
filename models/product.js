const mongoose = require("mongoose");
var productSchema=new mongoose.Schema({
    name:String,
    img:{
        type:String
    },
    category:Number,
    created_person:{
        type:String,
        defalut:"操作员",
    },
    created_company:{
        type:String,
        defalut:"安徽苏立科技股份有限公司",
    },
    created_time:{ 
        type:Date,
        default:Date.now,
    },
    view_num:{
        type:Number,
        default:200,
    },   
});

var Product=mongoose.model("Product",productSchema);
module.exports=Product;