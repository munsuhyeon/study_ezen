function gugudan(){ // 함수 시작
  for(let i = 1; i <= 9; i++){
    console.log(`3 * ${i} = ${3 * i}`);
  }  
} // 함수 끝
//gugudan(); // gugudan 함수 호출


// 함수를 특정 변수 안에 집어넣고 변수 이름으로 초훌할 수 있는데 이 형식을 함수표현식이라한다

//화살표 함수 정의법
// () => {};
const kukudan = () => {
  for(let i = 1; i <= 9; i++){
    console.log(`3 * ${i} = ${3 * i}`);
  } 
}
kukudan();