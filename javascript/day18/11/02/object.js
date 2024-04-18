/* 객체는 {} 중괄호를 이용해서 생성할 수 있다. 이런 방법을 리터럴 방식으로
객체를 생성했다고 표현한다.
바로 아래처럼 안에 아무런 내용이 없는 객체를 빈 객체라고 한다.*/
const empty = {};

//이런식으로 뭔가 들어있다면 처음부터 속성을 지정한 상태로 생성되었다고 말한다.
const x = {data:"name"};

//객체는 데이터의 종류를 가리지 않는다. 모든 자료형의 데이터를 가질 수 있다.
//숫자 논리 배열 모든 종류의 데이터가 들어간다.
//데이터 대신 함수를 넣어도 된다. 객체 데이터 접근 시 해당 함수를 실행하게 할 수 있다
//객체에서 속성값으로 함수를 집어넣으면 그 넣어진 함수는 메서드라고 부른다
const person = {
  name:{
    firstName:"Gildong",
    lastName:"Hong"
  },
  likes:["apple", "samsung"],
  printHello:function(){
    return "hello";
  }
};
console.log(person["name"]); // { firstName: 'Gildong', lastName: 'Hong' }
console.log(person["name"]["firstName"]); // Gildong
console.log(person["likes"]); // [ 'apple', 'samsung' ]
console.log(person["likes"][0]); // apple
console.log(person["likes"][1]); // samsung
console.log(person["printHello"]); // [Function: printHello]
console.log(person["printHello"]()); // hello