// require()함수는 모듈을 읽는 함수이다.
// 웹서버 처리를 위한 http모듈을 붙여서 require안에 삽입한다.
const http = require("http"); 

// req = rquest  res = response
// createServer()는 서버를 만드는 함수이다. 인풋값으로 요청과 응답을 받는다.
const server = http.createServer((req,res) => {
    // 서버 응답의 값을 설정한다. 받는 텍스트 데이터를 html문서로 해석하겠다는 뜻이다.
    res.setHeader("content-Type","text/html");
    res.end("hello world!!!");
});

// createServer()로 서버를 생성하고 뒤에 listen함수로 포트번호를 설정한다.
server.listen("3000",() => console.log("server start"));
