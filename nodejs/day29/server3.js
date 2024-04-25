// /user와 /feed라는 하위 url 주소를 만들어서 웹서버가 정보를 전달하는 프로그램 만들기

const http = require("http");
const url = require("url"); // url모듈 로딩해서 웹서버 만들기
http.createServer((req,res) => { // 요청과 응답을 인풋으로 받아서 처리하는 서버 만들기

    const path = url.parse(req.url, true).pathname;
    res.setHeader("content-Type","text/html");

    if(path === "/user"){ 
        user(req,res);
    } 
    else if(path === "/feed"){
        feed(req,res);
    }
    else{
         notFound(req,res);
    }

}).listen("3000", () => console.log("세부주소까지 해보기33"));

// user라는 세부주소에 실행되로 내용을 user함수 안에 넣고 함수 만들어서 코딩내용 대신 함수 쓰기
const user = (req,res) => {
    // url의 query부분을 user함수의 인풋값으로 받는다.
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name : ${userInfo.name}, age : ${userInfo.age}`);
}
const feed = (req,res) => {
    res.end(`
    <meta charset="UTF-8">
    <ul>
    <li>result11</li>
    <li>result22</li>
    <li>result33</li>
    </ul>
    `)
}
const notFound  = (req,res) => {
    res.statusCode = 404;
    res.end("page not found");
}