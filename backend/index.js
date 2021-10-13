const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const items=require('./routes/apis.js')

const app=express();
app.use(bodyParser.json())
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/shoppingList")
.then(()=>console.log('connected to db'))
.catch((err)=>console.log("failed to connect to the db..",err))

//use routes
app.use('/api/items',items)


app.listen(5000,()=>console.log("listening on port 5000.."))