const express= require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
let items=["buy food","cook food"];
let WorkItem=[];
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    let today= new Date();
    let option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",option);
    res.render("list",{listtitle:day,newlists:items});
});
app.post("/",function(req,res){
     var item=req.body.newitem;
     console.log(req.body.list)
     if(req.body.list==="Work"){
        WorkItem.push(item);
        res.redirect("/work")
     }else{
        items.push(item);
        res.redirect("/");
     }
})

app.get('/work',function(req,res){
    res.render("list",{listtitle:"Work List",newlists:WorkItem})
});

app.post("/work",function(req,res){
    let item=req.body.newitem;
    WorkItem.push(item);
    res.redirect("/work")
})
app.get('/about',function(req,res){
    res.render("about")
});
app.listen(1000,function(){
    console.log("server is on port 1000");
})