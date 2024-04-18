const date = new Date(2022,11,25,18,30,50); // 2022년 12월 25일 18시 30분 50초

// ${date.getFullYear()} : 날짜 데이터에서 연도데이터 추출
// ${date.getMonth()+1} : 날짜 데이터에서 월데이터 추출(월은 0부터 시작해서 1을 더해준다)
// ${date.getDate()} : 날짜 데이터에서 일데이터 추출
// ${date.getHours()} : 날짜 데이터에서 시간데이터 추출
// ${date.getMinutes()} : 날짜 데이터에서 분데이터 추출
// ${date.getSeconds()} : 날짜데이터에서 초데이터 추출
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat); // 2021-11-13 18:30:50

// 날짜 객체에서 연부터 분 초까지 백틱과 $사인을 활용해서 개별 날짜 데이터를 불러와서 날짜 데이터 편집이 가능하다