const http = require("http");
const url = require("url");
const server = http.createServer((req,res) => {
    const path = url.parse(req.url,true).pathname;
   
    res.setHeader("Content-Type","text/html; charset=utf-8");
    if(path in urlMap){
        urlMap[path](req,res);
    }else{
        notFound(req,res);
    }
})
.listen("8080",() => console.log("server4.js 실행"));

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
});
// 객체형 데이터셋을 정의해서 객체데이터 내부에 필요한 url을 등록하여 사용하여 if절의 불필요한 사용을 줄였다.
const urlMap = {"/":(req,res) => res.end("메인페이지 입니다."),"/user":user,"/feed":feed};