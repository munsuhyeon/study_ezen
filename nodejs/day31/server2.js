// /user와 /feed라는 하위 url 주소를 만들어서 웹서버가 정보를 전달하는 프로그램 만들기

const http = require("http");
const url = require("url"); // url모듈 로딩해서 웹서버 만들기
http.createServer((req,res) => { // 요청과 응답을 인풋으로 받아서 처리하는 서버 만들기
    /*
        url모듈을 가지고 요청데이터(req)로 받은 url주소 경로이름인 pathname을 얻어낸다.
        예제와는 상관없는 true는 쿼리문도 함께 받아서 처리할지를 물어보는 부분이다.
        예시) 네이버 웹툰안에 김부장 만화 주소
        http://comic.naver.com/webtoom/list?titleId=783053
        titleId=783053는 쿼리스트링으로 http 요청을 보낼 때 사용자가 원할때 보내는 방식이다.
        김부장 만화를 특정할 때 쿼리스트링 번호를 이용해 사용자가 원하는 만화가 들은 데이터경로값을 지정하는데 쓰인다.
        titleId=783053에서 titleId는 키값이고 783053은 벨류값이다.
        데이터객체이고 파이썬에서는 딕셔너리 데이터이다. key=value형식으로 데이터를 처리한다.
    */
    const path = url.parse(req.url, true).pathname;
    res.setHeader("content-Type","text/html");

    // /user /feed 해당하는 컨텐츠를 준비한다.

    // 사이트 이용자가 /user라고 입력한 경우
    if(path === "/user"){ 
        res.end("[user] name : andy, age : 35");
    } 
    // 사이트 이용자가 /feed라고 입력한 경우
    else if(path === "/feed"){
        res.end(`
                    <meta charset="UTF-8">
                    <ul>
                    <li>result</li>
                    <li>result2</li>
                    <li>result3</li>
                    </ul>
                    `);
    }
    // 만약 사이트 이용자가 지정된 user,feed 외에 잘못된 세부주소를 입력한다면
    else{
        res.statusCode = 404;
        res.end("page not found");
    }

}).listen("3000", () => console.log("세부주소까지 해보기"));
