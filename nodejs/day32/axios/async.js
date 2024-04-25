const axios = require("axios");

async function get20Movie(){
    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";
    try{
        const result = await axios.get(url);
        // 정보의 결과값은 data객체형식의 데이터 프로퍼티가 있다.
        const {data} = result;
        if(!data.articleList || data.articleList.size == 0){
            throw new Error("데이터가 없습니다.")
        }
        // data.articleList key안의 데이터를 추출하여 원하는 정보로 재구성함
        const movieInfos = data.articleList.map((article,idx)=>{
            return {title:article.title, rank: idx+1}
        })
        for(let movieInfo of movieInfos){
            console.log(`[${movieInfo.rank}등] ${movieInfo.title}`)
        }
    }
    catch(err){
        throw new Error(err)
    }
}
get20Movie();