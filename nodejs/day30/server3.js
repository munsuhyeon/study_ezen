const http = require("http");
const url = require("url");
const server = http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
   
    res.setHeader("Content-Type","text/html; charset=utf-8");
    if(path === "/user"){
        user(req,res)
    }else if(path === "/feed"){
        feed(req,res);
    }else{
        notFound(req,res);
    }
})
.listen("3000",() => console.log("server3.js 실행"));
const user = ((req,res) => {
    const userInfo = url.parse(req.url,true).query;
    res.end(`user name ===> name : ${userInfo.name}, age : ${userInfo.age}`);
});
const feed = ((req,res) => {
    res.end(`<meta charset="UTF-8">
        <ul>
        <li>다국어지원1</li>
        <li>다국어지원2</li>
        <li>다국어지원3</li>
        </ul>`)
})
const notFound = ((req,res) => {
    res.statusCode = 404;
        res.end("페이지를 찾을 수 없습니다.");
})