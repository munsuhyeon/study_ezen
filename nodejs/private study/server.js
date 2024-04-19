// 서버 제작
const http = require("http");
const url = require("url");
const server = http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
    
    res.setHeader("content-Type","text/html");
    
    if(path === "/user"){
            user(req,res)
    }else if(path === "/feed"){
            feed(req,res)
    }else{
        res.end("welcome node.js~~~~");
    }
}).listen("3000",() => console.log("서버 시작"));


function user(req,res){
    const userInfo = url.parse(req.url,true).query;
    res.end(`user.name = ${userInfo.name}, hobby = ${userInfo.hobby}`);
}
function feed(req,res){
    const userInfo = url.parse(req.url,true).query;
    res.end(`user.age = ${userInfo.age}`);
}