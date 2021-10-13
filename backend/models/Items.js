const mongoose=require('mongoose');
const ItemSchema=new mongoose.Schema({
    text:{
        type:String,
        requied:true
    },
    date:{
        type:String,
        default:Date.now
    }
})
module.exports= mongoose.model('item',ItemSchema)