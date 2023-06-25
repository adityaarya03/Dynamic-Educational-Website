const mongoose=require("mongoose")

const Learn=mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports=mongoose.model("learn",Learn)