const express = require("express");
const app = express();
const  port = 8000;
const url = require("url");
app.listen(port, ()=>{
    console.log("익스프레스로 라우터 리팩터링하기");
});
app.get("/",(req,res)=> {
    res.end("HOME");
});
app.get("/user",user);
app.get("/feed",feed);

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