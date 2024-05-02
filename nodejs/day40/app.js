// 익스프레스 url인식
const express = require("express");
// 익스프레스 실행하여 app변수에 저장
const app = express();
// node.js 패키지로 다른 폴더경로 인식시키는 패키지
const path = require("path");
// 실행 포트번호 3000으로 설정
const port = 3000;
// 1. 라우터가 포함된 blog.js를 읽어들입니다
const blogRoutes = require("./routes/blog")

// ejs형식 프로트엔드 페이지 사용 선언
app.set('view engine','ejs')
// 프론트엔드 파일경로는 views에 있다고 알려줌
app.set('views',path.join(__dirname,'views'));
// url경로해석은 확장패키지도 쓰겠다 (true 설정)
app.use(express.urlencoded({extended:true}));
// css는 public폴더에 있다고 알림
app.use(express.static('public'))
// 2. 읽어들인 라우터 실행
app.use(blogRoutes);

// 에러객체와 미들웨어가 추가된 함수
app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).render('500')
})



app.listen(port, ()=> console.log(`${port}번 포트 서버실행`))