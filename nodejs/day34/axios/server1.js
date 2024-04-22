const axios = require("axios")
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios.get(url).then((result)=>{
    // url을 읽었는데 정상이 아니라면 에러객체를 던짐
    if(result.status != 200){
        throw new Error("요청에 실패하였습니다")
    }
    // 데이터가 존재하면 데이터를 반환
    if(result.data){
        return result.data;
    }
    //상태는 정상이지만 반환할 데이터가 없다
    throw new Error("데이터가 존재하지 않습니다.")
})
.then((data)=>{
    // url안에 articleList 키 값이 없거나 키 값 안에 value데이터가 없다면 에러 표시
    if(!data.articleList || data.articleList.size == 0){
        throw new Error("데이터가 존재하지 않습니다.")
    }
    return data.articleList
}).then((articles)=>{ //data.articleList가 잘 들어왔을 때 이를 인풋으로 하는 함수 설정
    // 입력된 data.articleList는 함수 정의할 때 articles로 개명함
    return articles.map((article,idx)=>{
        // 입력받은 data.articleList를 다시 분해하여 영화제목이 들은 title 키값을 찾아내고
        // 영화순위를 위해 데이터의 인덱스값을 불러낸다. 이를 article,idx로 다시 개명
        return {title:article.title, rank:idx+1}
    })
}).then((results)=>{ // 영화의 제목과 순위를 뽑았으면 results 인풋변수에 넣고 함수 실행
    for(let movieinfo of results){
        console.log(`[${movieinfo.rank}위] ${movieinfo.title}`)
    }
}).catch((err)=>{
    console.log("에러 발생")
    console.log(err)
})