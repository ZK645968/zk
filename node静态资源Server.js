// npm init -y 
// npm install express --save
var express = require("express");
var path = require("path");
var app = express();
// 指定静态资源目录
app.use(express.static(path.json(__dirname, 'public')));
// 监听3000端口
app.listen(3000, function(){
  console.log("Website listening at port 3000");
})
