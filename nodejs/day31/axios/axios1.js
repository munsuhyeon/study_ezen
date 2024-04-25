const axios = require("axios");
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

//  axios를 통해서 인터넷 주소를 읽은 다음에 주소가 잘 읽어지면 함수를 실행합니다
// 그 함수의 내용은, 결과가 정상적이지 않으면 (정상상태를 의미하는 200이 아니면)
// 요청이 실패했다는 메세지가 담긴 에러 객체를 던지도록 합니다
axios.get(url).then((result) => {
    if(result.status != 200){
        throw new Error("요청이 실패하였습니다")
    }
    // 인터넷 주소가 잘 읽어져서 데이터가 읽어진 경우 읽은 데이터를 반환시키라고 주문

    if(result.data){
        return result.data
    }
    // 에러는 아닌데(사이트 먹통은 아니고) 읽은 사이트에 데이터가 없는경우
    throw new Error("데이터가 없습니다.")
}).then((data) => { // 앞의 axios로 시작되는 구문이 전부 실행되었을 때 다음의 함수실행
    // url 주소 데이터셋 안에 articleList라는 키를 가진 데이터가 없거나 있긴한데 데이터 크기가 0인 경우
    if(!data.articleList || data.articleList.size == 0){
        throw new Error("데이터가 없습니다.")
    }
    return data.articleList
}).then((articles) => {
    // articleList key 안에 있는 데이터 속에서 title키 값안의 영화제목을 뽑고 영화순위를 표시한다.
    return articles.map((article,idx)=>{
        return {title:article.title, rank: idx+1}
    })
}).then((results) =>{
    for(let movieInfo of results){
        console.log(`[${movieInfo.rank}등] ${movieInfo.title}`)
    }
}).catch((error) =>{
    console.log("에러발생");
    console.log(error);
})