const express = require("express");
const router = express.Router();

// express모듈을 실행해서 그 안의 get 명령어를 사용합니다
router.get('/', function(req, res) {
    //res 즉, 서버의 응답으로 index.ejs를 화면에 '렌더링'하라는 뜻입니다
    res.render('index')
})

router.get('/confirm', function(req, res) {
    res.render('confirm')
})

router.get('/about', function(req, res) {
    res.render('about')
})
module.exports = router;