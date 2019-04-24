//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");

var route = express();

route.set("view engine", "ejs"); // set ejs module in our js file , it should be written under the var route= express() line becasue it tells that we have use express with ejs engine

route.use(bodyParser.urlencoded({
  extended: true
}));

route.get("/", function(req, res) {
  var today = new Date(); // to get the current date
  var day = "";
//  if (today.getDay() == 6 || today.getDay() == 0) { // here 0 to 6 used as an array to indentify the days according to our calling object
  //  day = "weeekend";
//  } else {
  //  day = "weekday";
//  }

if (today.getDay()==0){
  day="Sunday";
}
else if (today.getDay()==1){
  day="Monday";
}
else if (today.getDay()==2){
  day="Tuesday";
}
else if (today.getDay()==3){
  day="Wednesday";
}
else if (today.getDay()==4){
  day="Thursday";
}
else if (today.getDay()==5){
  day="Friday";
}
else{
  day="Saturday";
}
  res.render("list", {
    thisDay: day   // here thisday is key in our list.ejs file ... it should be matched in our app.js file ...and day is the objecht where we contain our data that we want to display in our home route

  });
});


route.listen(3000, function() {
  console.log("my page is now running at port 3000");
});
