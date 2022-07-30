const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res){
  var today = new Date();
  var day = "";
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

var day = today.toLocaleDateString("en-US", options);

  res.render("list", {day: day, items:items});
});

app.post("/", function(req, res){
  //console.log(req.body.listItem);
  var item = req.body.listItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server is running or port 3000");
});
