const express = require("express");
const router = express.Router();
const resData = require("../utill/restaurant-data")
const uuid = require("uuid")

router.get('/recommend',(req,res)=>{
    res.render('recommend')
})
router.post('/recommend',(req,res)=>{
    const restaurantId = uuid.v4();
    const data = req.body;
    data.id = restaurantId;
    const restaurant = resData.getRestaurants();
    restaurant.push(data);
    resData.storedRestaurants(restaurant);
    res.redirect('confirm')
})
router.get('/restaurants',(req,res)=>{
    const restaurants = resData.getRestaurants();
    let order = req.query.order;
    let nextOrder = 'desc';
    if(order != 'asc' && order != 'desc'){
        nextOrder = 'asc'
    }
    if(order === 'desc'){
        nextOrder = 'asc'
    }
    restaurants.sort(function(resA,resB){
        if((order === 'asc' && resA.name>resB.name)||(order === 'desc' &&resA.name<resB.name)){
            return 1
        }
        return -1
    })
    res.render('restaurants',{restaurants:restaurants,nextOrder:nextOrder})
})
router.get('/restaurants/:id',(req,res)=>{
    const restaurants = resData.getRestaurants();
    for(const restaurant of restaurants){
        if(restaurant.id === req.params.id){
            res.render('restaurant-detail',{restaurant:restaurant})
        }
    }
    res.render('404')
})
module.exports = router;