const express = require("express");
const app = express();
const port = 3000;
const url = require("url");
// urlMap으로 세부주소를 관리하는 부분이 없어졌다.
app.get("/",home);
app.get("/user",user);
app.get("/feed",feed);
app.listen(port,()=>{
    console.log("경로를 지정할 수 있는 라우터 만들기");
})
function home(req,res){
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.end("춘식이 1등급 원유 초코우유");
}
function user(req,res){
    const user = url.parse(req.url,true).query;
    res.end(`[user] name : ${user.name}, age : ${user.age}`);
}
function feed(req,res){
    res.end(`
    <ul>
    <li>feed1</li>
    <li>feed2</li>
    <li>feed3</li>
    </ul>`)
}

