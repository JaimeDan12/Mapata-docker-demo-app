var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

// Serve project root as static too so root assets (logo) are available
app.use(express.static(__dirname));

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/sharks",function(req,res){
  res.redirect('/mapata');
});

router.get("/mapata",function(req,res){
  res.sendFile(path + "mapata.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
