// 함수를 만드는 방식은 크게
// 함수선언문
// 함수표현식
// 화살표 함수 (ES6 부터) 가 있다


// 함수선언문의 정의 방법
// function 함수이름(인풋값) {
  // 나 하고싶은 코드블럭
// }

// function gugudan(){
//     for(let i = 1; i <= 9; i++){
//       console.log(`3 * ${i} = ${3 * i}`);
//     }  
//   };
  
//   // gugudan(); // 함수 호출
  
//   // 함수를 특정 변수안에 집어넣고 변수 이름으로 호출할 수 있는데 
//   // 그 방식을 함수표현식이라 한다
  
//   const gugugugudan = function gugudan(){
//     for(let i = 1; i <= 9; i++){
//       console.log(`3 * ${i} = ${3 * i}`);
//     }  
//   };
  
//   // gugugugudan(); // 함수 호출
  
//   // 화살표 함수 정의 법
//   // () => {};
//   const kukudan = () => {
//     for(let i = 1; i <= 9; i++){
//       console.log(`3 * ${i} = ${3 * i}`);
//     }  
//   };
//   kukudan(); // 함수 호출

//   // 화살표 함수 정의 할 때 매개변수가 1개면 안에 괄호 생략 가능
// const summ = num1 => {
//     console.log(num1);
//   }

// /* 함수 내부에 선언된 변수는 함수 밖에서 읽을 수 없다*/ 
// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }  
// console.log("out  :::  " + sum(10,3));


/*자바스크립트의 this는 "나 자신" 즉 함수나 클래스 내부의 변수입니다.*/
function sum(num11,num22){
    this.num1 = num11;
    this.num2 = num22;
    return num1 + this.num2;
}
const result = sum(10,20);
console.log(result)

let test = (a,b) => {
    this.a = a;
    this.b = b;
    return a+b;
}
console.log(test(2,5));