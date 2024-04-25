const axios = require("axios");
async function getTop20Movies(){
    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";
    try{
        // awati로 서버 주소에서 데이터 받아오는거 기다린다
        const result = await axios.get(url);
        // 웹 주소의 결과는 데이터 프로퍼티가 있다(객체데이터 형식의 데이터값이 있다)
        const {data} = result;
        if(!data.articleList || data.articleList.size == 0){
            throw new Error("데이터가 없습니다.")
        }
        // 원하는 결과값이 영화제목과 순위를 map명령어를 통해서 뽑아내서 객체 데이터 재편성
        const movieInfo = articles.map((article,idx)=>{
            return{title:article.title,rank:idx+1}
        })
        for(let movieInfo of results){
            console.log(`[${movieInfo.idx}등 ${movieInfo.title}]`);
        }
    }catch(err){
        console.error(err.message);
    }
}