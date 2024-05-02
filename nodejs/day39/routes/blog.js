const express = require("express");
const db = require('../data/database');
const router = express.Router();

router.get('/',function(req,res){
    res.redirect('/posts')
})
// sql데이터베이스 연결 시 주의할 점은 비동기의 동기화 작업을 해야한다는 것이다
// 페이지로딩이 sql데이터 조회보다 빨라서 sql데이터가 정삼임에도 데이터를 가져오지 않고 페이지를 로딩하면
// 데이터가 없는것처럼 나오는 문제가 있기 때문에 async&await을 사용한다
router.get('/posts',async function(req,res){
    const query = 'select posts.*, authors.name as author_name from posts inner join authors on posts.author_id = authors.id'
    const [posts] = await db.query(query)
    res.render('posts-list',{posts:posts})
})
// 읽어온 sql정보를 가지고 쿼리를 돌려서 db안 데이터를 보인다
router.get('/new-post', async function(req,res){
    const [authors] = await db.query('select * from authors')
    res.render('create-post', {authors:authors})
})

//db에서 배열데이터(key:value 구성이 아닌 데이터값만을 가진 형식) 가져오기
router.post('/posts', async function(req,res){
    const data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.body.author
    ]
    // db변수에 저장된 db로그인 정보로 sql에 접근하여 데이터삽입 쿼리문 실행
    // 폼태그의 입력데이터를 data변수에 배열로 저장해서 쿼리문으로 sql에 집어넣는다
    // 물음표 개수와 콤마개수가 같아야한다
    await db.query('insert into posts (title,summary,body, author_id) values (?)',[data,])
    res.redirect('/posts')
})
router.get('/posts/:id',async function(req,res){
    const query = `select posts.*, authors.name as author_name,
    authors.email as author_email from posts inner join authors
    on posts.author_id = authors.id where posts.id = (?)`
    const [posts] = await db.query(query,[req.params.id])

    if(!posts || posts.length === 0){
        return res.status(404).render(404)
    }
    // 날짜 변환 long:문자 numeric:숫자
    const postData = {
        ...posts[0],
        date:posts[0].date.toISOString(),
        humanReadableDate:posts[0].date.toLocaleDateString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
    res.render('post-detail',{post:postData})
})
// 생성된 게시글 세부주소에 가서 데이터를 조회하는 쿼리문을 보낸다
router.get('/posts/:id/edit', async function(req,res){
    const query = 'select * from posts where id = ?'
    // 게시글 데이터는 sql에서 여러 줄이 있기 때문에 posts변수엔 반드시 배열처리하기
    const [posts] = await db.query(query,[req.params.id])
    // 데이터가 없는 경우 예외처리
    if(!posts || posts.length === 0){
        return res.status(404).render(404)
    }
    res.render('update-post',{post:posts[0]})
})

router.post('/post/:id/edit', async function(req,res){
    const query = 'update posts set title=?, summary=?, body=? where id=?'

    await db.query(query,[
        req.body.title,
        req.body.summary,
        req.body.content,
        req.params.id])
    res.redirect('/posts')
})

router.post('/post/:id/delete', async function(req,res){
    const query = 'delete from posts where id = ?'
    await db.query(query,req.params.id);
    res.send("<script>alert('글이 삭제되었습니다.')</script>")
    res.redirect('/posts')
})

module.exports = router;