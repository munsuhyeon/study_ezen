const express = require("express");
const app = express();
let posts = []; // 게시글 목록 리스트 할당
app.use(express.json()); 
// app.user()는 미들웨어를 사용할 때 사용하는 함수
// express에서 미들웨어는 요청과 응답 사이에 로직을 추가할 수 있는 함수를 제공한다.
// 예) http요청 시마다 로그를 남기는 작업을 하고싶으면 api코드에 로그를 남기는 코드를 추가하지 말고 로그를 남기는 미들웨어를 추가하면 된다.
// express.json()미들웨어는 http요청의 body를 사용하도록 해준다.
// express.json()을 실행하지 않으면 req.body값이 undefind로 나오게 된다.
app.use(express.urlencoded({extended:true}));
// express.urlencoded({extended:true})는 content-type이 application/x-www-form-urlencoded인경우 파싱해준다.
// post요청은 대부분이 저 타입이라서 express.json()과 함께 사용한다.
// application/x-www-form-urlencoded타입이란 body에 key=value&key2=value2 같은 키=값 조합 형태를 가진 데이터를 말한다.

app.get("/",(req,res) => {
    res.json(posts); // 게시글 리스트를 json형식으로 보여준다.
    //res.end()는 인수로 문자열과 바이트 버퍼 형식만 넣을 수 있어서 리스트로 된 데이터는 전달 불가하다.
});
 app.post("/posts",(req,res)=>{ 
 // req(요청)의 body에 담겨진 title,name,text을 title,name.text변수로 할당한다.
 // post요청이므로 req.body에 키와 값이 들어있다.
 // title=타이틀&name=이름&text=내용 형식 데이터를 urlendoded 미들웨어가 객체로 변경해서 req.body에 추가한다.
    const {title,name,text} = req.body; // req.body = {title: '1', name: '2', text:'3'}
    res.json(req.body);
    posts.push({id:posts.length+1, title, name, text, createdDt:Date()}); // 게시글을 게시판에 추가 글의아이디/제목/이름/내용/생성일시
    res.json({title,name,text});
 });
 app.delete("/posts/:id", (req,res) => { // :id = 해당 부분에 데이터가 들어오면 문자열 타입으로 params.id에 할당
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id); // 10 글 삭제 로직
    //10 게시판의 글에서 id 이외의 글들만 뽑아서 filteredPosts에 할당
    //모던자바스크립트에서는 배열에서 특정 요소를 삭제할 때 filter를 주로 사용한다.
    // +id = id문자열을 숫자형으로 변경한다. parseInt와 같다.
    // filter()함수를 사용해 입력받은 글의 id와 기존 게시글의 id가 다른때만 filteredPosts에 새로 할당한다.
    // filteredPosts에는 id로 입력받은 게시글을 제외하고 할당했으므로 기존 posts에 있는 데이터와 비교하면 게시글이 삭제된 상태이다.
    const isLengthChanged = posts.length !== filteredPosts.length; // 11 삭제 확인 길이가 다르면 ok를 응답함.
    posts = filteredPosts;
    if(isLengthChanged){ // 12 posts의 데이터 개수가 변경되었으면 삭제 성공
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED") // 13 변경되지 않음
 });
 app.listen("3000",() => console.log("간단 게시판 만들기"));

 //curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d "title=제목1&name=jone&text=안녕" http://localhost:3000/posts