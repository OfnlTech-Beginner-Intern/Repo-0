const router=require('express').Router();

//Item model
const Items=require('../models/Items')

//@route Get api/items
//@desc GET ALL items
//@access Public 
router.get('/',(req,res)=>{
    Items.find()
    .sort({date:-1})
    .then(items=>res.json(items))

})

router.post('/',(req,res)=>{
    const newItems=new Items({
        text:req.body.text
    })
    newItems.save()
    .then(()=>{
        res.json(req.body.text)
        console.log('saved to db..')})
    .catch((err)=>console.log(err))

})

router.delete('/:id',(req,res)=>{
   Items.findById(req.params.id)
   .then((item)=>item.remove()
   .then(()=>res.json({"sucess":true})))
   .catch(err=>res.json({"sucess":false}))


})

module.exports=router;