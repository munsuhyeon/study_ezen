const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000

app.use(express.static('public')); // css파일을 public폴더에 넣어서 화면에 적용

// json 데이터를 받으면 데이터를 해석해서 화면에 표시해야함
// urlencoded는 express에서 데이터해석을 위해 사용
//  {extended: false}는 데이터의 파싱(해석)방법을 지정합니다
// 옵션이 false란 뜻은 내장된 쿼리스트링 라이브러리를 사용하여 데이터를 파싱하란 뜻
app.use(express.urlencoded({extended:false}))

app.get('/', function(req,res){
    console.log(__dirname)
    // 메인주소에 쓰일 index.html을 views폴더에서 읽어들인 후 htmlFilePath변수에 저장
    const htmlFilePath = path.join(__dirname, 'views','index.html');
    // __dirname:file명을 제외한 절대 경로
    // htmlFilePath 변수를 읽어서 화면띄움
    res.sendFile(htmlFilePath)
})
app.get('/restaurants', function(req,res){
    // 메인주소에 쓰일 index.html을 views폴더에서 읽어들인 후 htmlFilePath변수에 저장
    const htmlFilePath = path.join(__dirname, 'views','restaurants.html');
    // htmlFilePath 변수를 읽어서 화면띄움
    res.sendFile(htmlFilePath)
})
app.get('/recommend', function(req,res){
    // 메인주소에 쓰일 recommend.html을 views폴더에서 읽어들인 후 htmlFilePath변수에 저장
    const htmlFilePath = path.join(__dirname, 'views','recommend.html');
    // htmlFilePath 변수를 읽어서 화면띄움
    res.sendFile(htmlFilePath)
})
// post명령어로 폼태그에 입력한 정보를 json파일에 담는다.
// json파일에 데이터를 담는 방법이 api 중 post명령어 사용이다.
app.post('/recommend',function(req,res){
    // 요청객체인 req를 통해서 폼태그에 입력한 데이터를 가져온다
    const restaurant = req.body;
    // 고객데이터가 저장되는 json파일의 경로이다
    const filePath = path.join(__dirname,'data','restaurants.json');
    // fs명령어로 지정된 json파일을 읽는다
    const fileData = fs.readFileSync(filePath);
    // 읽어온 json데이터는 JSON.parse 명령어로 편집할 수 있는 데이터 형태로 '해석'한다
    const storedRestaurants = JSON.parse(fileData); // JSON.parse(): JSON 문자열을 JavaScript 객체로 변환
    // 해석된 데이터를 데이터셋에 추가한다
    storedRestaurants.push(restaurant);
    // 데이터 추가 후 다시 json형식으로 업데이트된 데이터를 원복시킨다.
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants)); // JSON.stringify(): JavaScript 객체를 JSON 문자열로 변환
    // 모든 작업이 완료되면 사이트 이용자를 confirm주소로 돌려보낸다
    res.redirect('/confirm')
})
app.get('/confirm', function(req,res){
    // 메인주소에 쓰일 confirm.html을 views폴더에서 읽어들인 후 htmlFilePath변수에 저장
    const htmlFilePath = path.join(__dirname, 'views','confirm.html');
    // htmlFilePath 변수를 읽어서 화면띄움
    res.sendFile(htmlFilePath)
})
app.get('/about', function(req,res){
    // 메인주소에 쓰일 about.html을 views폴더에서 읽어들인 후 htmlFilePath변수에 저장
    const htmlFilePath = path.join(__dirname, 'views','about.html');
    // htmlFilePath 변수를 읽어서 화면띄움
    res.sendFile(htmlFilePath)
})
app.listen(port, () => console.log(`${port}번 포트입니다`))