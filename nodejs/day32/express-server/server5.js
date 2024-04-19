const express = require("express"); // express 모듈 불러오기 모듈을 담은 객체여서 바로 사용은 불가능
const app = express(); // express를 실행해서 express함수를 만들고 app에 저장
const port = 3000; // express에서는 포트번호를 변수처리 한다.
app.get("/",(req,res) => {
    res.set({"Content-Type":"text/html; charset=utf-8"});
    res.end("안녕 Express");
});
app.listen(port, () => {
    console.log(`서버시작!, 포트번호는 ${port}이다.`);
})