// path라는 라이브러리는 node.js 자체라이브러리인데 url 세부 페이지를 생성하는데 사용
const path = require('path');
const fs = require('fs');
const express = require('express');
const port = 3000;
const app = express();
const uuid = require("uuid");
// urlencoded명령어로 json데이터 들어오면 해석해서 쓸 수 있게 하겠다
// {extended: false}는 urlencoded의 데이터 해석방식인데 false의 의미는 
// 별도의 해석 패키지를 부르지 않겠습니다. 자체 모듈로 해석할게요
// 자체 querystring 라이브러리 쓴다는 의미
app.use(express.urlencoded({extended: false}))
const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

// ejs 사용관련 코드 추가
// ejs 파일은 views 폴더로 지정
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// routes폴더의 파일들
app.use('/',defaultRoutes);
app.use('/',restaurantRoutes);

// css 적용하는 코드임. public폴더를 인식하여 html이 css읽을 수 있게함
app.use(express.static('public'));

app.use(function(req,res){
    res.render('404')
})
app.use(function(error,req,res){
    res.render('500')
})
app.listen(port, () => console.log(`${port}번으로 서버구동`))