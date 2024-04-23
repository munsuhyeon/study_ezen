const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid"); // url자동생성을 통한 고유식별자 생성 모듈
const { sourceMapsEnabled } = require("process");
const port = 3000;
const resData = require("./utill/restaurant-data")

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/index',(req,res) => {
    res.render('index')
})
app.get('/about',(req,res) => {
    res.render('about')
})
app.get('/recommend',(req,res) => {
    res.render('recommend')
})
app.post('/recommend',(req,res) => {
    const restaurant = req.body;
    // 새 음식점에 대한 고유id를 생성한다.
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoreRestaurants();
    restaurants.push(restaurant);
    resData.storedRestaurants(restaurants);
    res.redirect('/confirm')
})
app.get('/confirm',(req,res) => {
    res.render('confirm')
})
app.get('/restaurants',(req,res) => {
    let order = req.query.order;  // 쿼리 데이터의 순서를 저장합니다
    let nextOrder = 'desc'; // 'desc' = 내림차 순으로 다음순번의 기본값을 세팅해 둡니다
    // 혹시라도 오름차순도 내림차순도 아닌 경우엔 오름차순으로 정해 둡니다
    if(order != 'asc' && order != 'desc'){
        order = 'asc'
    }
    // 현재 내림차순으로 정해져 있다면 다음번엔 오름차순입니다
    if(order === 'desc'){
        nextOrder = 'asc'
    }
    const storedRestaurants = resData.getStoreRestaurants();
    storedRestaurants.sort(function(resA,resB){
        
        if(
            // 오름차순이 기준인데 a이름이 b이름보다 크면 순서를 바꿔서 오름차순으로 만들어 주세요
            (order === 'asc'&& resA.name > resB.name)||
            // 내림차순이 기준인데 a이름이 b이름보다 작으면 순서를 바꿔서 내림차순으로 만들어 주세요
            (order === 'desc'&&resA.name < resB.name)
        ){
            return 1
        }
        return -1
    })

    res.render('restaurants',{restaurants:storedRestaurants,dataCount:storedRestaurants.length,nextOrder:nextOrder})
})
// restaurant-detail 페이지를 띄울 세부 주소
// 콜론의 의미가 데이터의 길이에 맞게 id값에 해당하는 세부 웹주소를 자동으로 생성하라는 의미이다.
app.get('/restaurants/:id',(req,res) => {
    // 요청된 url에서 음식점 id를 가져온다
    const restaurantId = req.params.id; // r1
    const storedRestaurants = resData.getStoreRestaurants();
    for(const restaurant of storedRestaurants){
        if(restaurant.id === restaurantId){
            // 가져온 음식점 id를 rid데이터값으로 주고 준비된 restaurant-detail 페이지를 화면에 띄운다
            res.render('restaurant-detail',{restaurant: restaurant});
        }
    }
    res.render('404')
})
//등록된 경로가 없는 경우 404페이지
app.use((req,res)=>{
    res.render('404')
})
// 서버 에러
// 백엔드 관련 함수가 fm으로 가면 (요청,응답) = (req,res)외에
// (에러,요청,응답,다음작업) = (error,req,res,next) 총 4가지 경우의 값을 입력받는다
// function(error,req,res,next) 이 다음 작업의 의미는 요청과 응답사이의 중간작업을 의미하여 이를 미들웨어라 한다
//그래서 오류, 요청, 응답, 미들웨어 처리 총 4가지의 작업을 입력받게 되는 것이다
app.use((error,req,res,next)=>{
    console.log("서버 에러")
    console.log(error)
    res.render('500')
})
app.listen(port,()=> console.log(`${port}번으로 서버 실행`))
