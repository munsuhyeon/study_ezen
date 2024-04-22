const express = require("express");
const path = require("path") // node.js 자체 라이브러리로 url세부 페이지를 생성하는데 사용
const app = express();
const port = 3000;
const fs = require("fs");
app.use(express.static('public'));
//urlencoded로 json데이터가 들어오면 해설해서 쓸 수 있게 하겠다
// {extended:false} => false로 별도의 해석패키지를 부르지 않고 자체 모듈로 해석하겠다 => 자체 쿼리스트링 라이브러리 사용
app.use(express.urlencoded({extended:false}));

// ejs 사용관련 코드 추가 ejs파일은 views 폴더로 지정
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/', (req,res) => {
    // views라는 폴더에 위치하는 html파일을 읽어서 htmlFilePath에 저장
    //const htmlFilePath = path.join(__dirname,'views','index.html')
    // 서버응답의 형태로 (response)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)

    res.render('index');
})
app.get('/index', (req,res) => {
    // views라는 폴더에 위치하는 html파일을 읽어서 htmlFilePath에 저장
    //const htmlFilePath = path.join(__dirname,'views','index.html')
    // 서버응답의 형태로 (response)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)
    res.render('index');
})
// 음식점 개수 변수 정보를 restaurants.ejs에 보내준다
app.get('/restaurants', (req,res) => {
    //const htmlFilePath = path.join(__dirname,'views','restaurants.html')
    // 서버응답의 형태로 (resonse)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)
    const filePath = path.join(__dirname,'data','restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    if(Object.hasOwn(storedRestaurants,'name')){
        console.log("객체가 비어있다")
    }else{
        console.log(storedRestaurants[0])
        console.log("실패222")
    }
    
    res.render('restaurants',{numberOfRestaurants: storedRestaurants.length, Restaurants:storedRestaurants});
})
app.get('/recommend', (req,res) => {
    //const htmlFilePath = path.join(__dirname,'views','recommend.html')
    // 서버응답의 형태로 (resonse)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)
    res.render('recommend');
})
app.post('/recommend', (req,res) => {
    const restaurant = req.body;
    const filePath = path.join(__dirname,'data','restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData); // JSON.parse(): JSON 문자열을 JavaScript 객체로 변환
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants)); // JSON.stringify(): JavaScript 객체를 JSON 문자열로 변환
    res.redirect('/confirm')
})
app.get('/confirm', (req,res) => {
    //const htmlFilePath = path.join(__dirname,'views','confirm.html')
    // 서버응답의 형태로 (resonse)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)
    res.render('confirm');
})
app.get('/about', (req,res) => {
    //const htmlFilePath = path.join(__dirname,'views','about.html')
    // 서버응답의 형태로 (resonse)이니까 저장된 페이지를 sendFile명령어를 통해 페이지가 렌더링된다.
    //res.sendFile(htmlFilePath)
    res.render('about');
})
app.listen(port,() => console.log(`${port}번으로 서버 구동`))