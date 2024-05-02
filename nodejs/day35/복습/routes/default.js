const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/index',(req,res)=>{
    res.render('index')
})
router.get('/about',(req,res)=>{
    res.render('about')
})
router.get('/confirm',(req,res)=>{
    res.render('confirm')
})

module.exports = router;