const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const resData = require("../utill/restaurants-data")
/*
서버에 세부 주소를 지정하는 것을 라우팅이라 한다(라우트는 길이란 뜻이다
서버에 세부주소를 뚫으면 파일이 길어지는데
익스프레스에서 이러한 라우트(길)을 분리할 방법을 제공한다.

주의할점은 라우팅 관련 코딩을 routers폴더 안에 들어가갸 한다.
*/
router.get('/',function(req,res){
    res.render('/index')
});

function idGen(){
    let ccc = 'r'
    let nextId = resData.getRestaurants().length
    nextId++
    return ccc + nextId;
}

// 음식점 개수 변수 정보를 restaurants.ejs에 보내준다
router.get('/restaurants', function(req, res) {
    let order = req.query.order;
    let nextOrder = 'desc'; //정렬 기본값
    // 오름차순도 아니고 내림차순도 아닌 경우 오름차순으로 정함
    if(order != 'asc' && order != 'desc'){
        order = 'asc'
    }
    // 현재 내림차순이라면 다음은 오름차순이다
    if(order === 'desc'){
        nextOrder = 'asc'
    }
    const storedRestaurants = resData.getRestaurants();

    storedRestaurants.sort(function(resA,resB){
    // 오름차순 기준임에도 앞에 데이터가 뒤보다 큰 경우    내림차순 기줌임에도 앞의 데이터가 뒤보다 작으면
        if((order === 'asc' && resA.name > resB.name) || (order === 'desc' && resA.name < resB.name)){
            return 1
        }
            return -1
        // a-b > 0 : 내림차순
        // a-b < 0 : 오름차순
    })
    res.render('restaurants', {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,nextOrder:nextOrder
    })
})
router.get('/restaurants/:id',function(req,res){
    const restaurantId = req.params.id;
    const storedRestaurants = resData.getRestaurants();
    for(const restaurant of storedRestaurants){
        if(restaurant.id === restaurantId){
            res.render('restaurant-detail',{restaurant:restaurant})
        }
    }
    res.render('404')
    
})
router.get('/recommend', function(req, res) {
    res.render('recommend')
})

// recommend 페이지 안의 폼태그를 통해 데이터를 받아야 하므로
// 웹 api기능을 recommend 경로 안에 넣어서 데이터를 받을 수 있도록 조치한다
// api에서 글의 생성을 의미하는 post를 사용하여 데이터를 입력받아 json에 추가한다
router.post('/recommend', function(req,res) {
    const storedRestaurants = resData.getRestaurants();
    const restaurantId = idGen();
    // 폼태그의 데이터를 restaurant변수에 저장
    const restaurant = req.body;
    console.log("==============");
    restaurant.id = restaurantId
    // restaurants.json를 읽어들임
    // 현재까지의 json데이터를 해석하여 데이터 편집이 가능한 형태로 풀어놓습니다
    
    // 폼태그에서 읽은 restaurant데이터를 json데이터셋에 push로 추가합니다
    storedRestaurants.push(restaurant);
    // 추가된 데이터셋을 최종적으로 json파일안에 저장합니다
    resData.storedRestaurants(storedRestaurants);
    res.redirect('/confirm')
})
module.exports = router;