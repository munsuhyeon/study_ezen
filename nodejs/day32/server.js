const http = require("http");
const url = require("url");
const server = http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html; charset=utf-8");
    if(path === "/user"){
        res.end("user name ===> name : 디지털수업, age = 30");
    }else if(path === "/feed"){
        res.end(`<meta charset="UTF-8">
        <ul>
        <li>다국어지원1</li>
        <li>다국어지원2</li>
        <li>다국어지원3</li>
        </ul>`)
    }else{
        res.statusCode = 404;
        res.end("페이지를 찾을 수 없습니다.");
    }
});
server.listen(8080,() => console.log("8080포트 실행"));