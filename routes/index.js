var express = require("express");
var router =express.Router();
var fs =require("fs");


router.get("/",function(req, res){
  res.render("index")
})

router.get("/trending",function(req, res){
  res.render("trending")
})

router.get("/movies",function(req, res){
  res.render("movies")
})

router.get("/subscription",(req, res)=>{
  res.render("subscription")
})

router.post("/submit", function (req, res) {
  let email = req.body.email;
  fs.appendFile("data.txt" , `${email}\n`, function (e){
    if (e) {
      console.log(e);
    } else{
      res.redirect("/");

    }
    });
  });
module.exports=router