const express = require("express");
const app = express();

var collection = require("./mongo");
const cors =require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());



// setting api
app.get('/',(req,res)=>{
    res.send("home page ")
});
//signup
app.post('/acc/signup',(req,res)=>{
    var detail=new collection(req.body);
    detail.save();
    res.send("registration added successfully")
})
//port
app.listen(15000,()=>{
    console.log("sever is running");
});