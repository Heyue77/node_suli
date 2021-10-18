
const mongoose = require("mongoose");
var equipmentSchema=new mongoose.Schema({
    name:String,
    img:{
        type:String,
        defalut:"/public/img/expRecCon/01-x荧光光谱分析测试仪.jpg",
    },
    created_person:{
        type:String,
        defalut:"安徽苏立科技",
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

var Equipment=mongoose.model("Equipment",equipmentSchema);
module.exports=Equipment;