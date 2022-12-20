const express= require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
var items=["buy food","cook food"];
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    var today= new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",option);
    res.render("list",{dayy:day,newlists:items});
});
app.post("/",function(req,res){
     var item=req.body.newitem;
    items.push(item);
    res.redirect("/");
})
app.listen(1000,function(){
    console.log("server is on port 1000");
})