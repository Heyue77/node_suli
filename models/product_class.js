const mongoose = require("mongoose");
var product_classSchema=new mongoose.Schema({
    name:String
});

var Product_class=mongoose.model("Product_class",product_classSchema);
module.exports=Product_class;