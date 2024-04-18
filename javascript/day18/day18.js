//함수레벨 스코프를 가지는 var와 블록레벨 스코프를 가지는 let, const 
if (true) {
  var y = 20; // 블록 내에서 선언된 변수
  let z = 30; // 블록 스코프를 가지는 변수 (ES6 이후)
  const w = 40; // 블록 스코프를 가지는 상수 (ES6 이후)
  console.log(y); // 20 출력
  console.log(z); // 30 출력
}

console.log(y); // 20 출력 (var는 함수 스코프를 따르지만, 블록 내에서도 접근 가능)
//console.log(z); // 에러: z는 블록 외부에서 접근 불가 (let으로 선언된 변수는 블록 스코프를 가짐)
//console.log(w); // 에러: w는 블록 외부에서 접근 불가 (const로 선언된 상수는 블록 스코프를 가짐)
// 스코프 = var & let, const
// var는 함수 중괄호 안에서만 범위인식
// let,const는 중괄호면 거의 어디든 

printHello();
function printHello(){
  console.log("Hello");
}
//함수의 호이스팅 현상은 함수 선언문에서 발생하지만(옛날방식)
//함수 표현식과 화살표 함수에서는 발생하지 않는다(모던자바스크립트.ES6)


/*즉시 실행 함수
일반적으로 함수를 선언하면 함수 자체는 전역 스코프에 정의된다
(코드 전체에 선언된다는 말)
그러면 함수의 이름은 컴터 메모리에 등록되기 때문에 그 코드 안에서는
같은 이름을 쓸 수 없다.
그런데 함수를 1회성으로 한번만 쓰고 싶다면
한번만 쓰고싶은 함수가 계속 남아있는 현상을 전역 스코프가 오염되었다라고 표현한다.
즉시 실행함수로 함수를 정의하면 함수실행 후 메모리에 데이터가 남아있지 않다.
그래서 전역스코프 오염현상을 방지합니다.
*/
(function init(){
    console.log("initialized!");
})();

// person객체에 데이터를 추가하는 과정
// 객체에 key이름을 선언해주고 나중에 value값을 넣어주면 된다
//이렇게 만들어진 객체에 나중에 속성을 추가한다고 말하고 이를 속성을 동적으로 추가한다고한다.
const person ={};
person.name = {firstName:"Gildong",lastName:"Hong"};
person.likes =  ["apple", "samsung"];
console.log(person);

// 객체속성의 동적삭제
delete person.name;
console.log("동적삭제");
console.log(person);

/*const 변수의 배열의 일부 데이터를 수정할 수 있는 이유
배열은 객체의 일종으로 객체자료형의 특징은 참조자료인데, 차몾의 의미를 값 자체를 저장하는 것이 아닌
값에 대한 메모리 주소를 가지고 있는 것이 특징이다
일반 숫자, 문자데이터 = 일반자료형(데이터 자체를 저장)
배열 객체데이터 = 참조 자료형(데이터가 들어있는 메모리 주소를 저장)
그래서 const는 데이터 자체는 못바꾸게 하지만 데이터의 주소를 바꾸는 배열은 가능하다
그래서 const가 참조자료형인 객체와 배열의 데이터 수정을 허용하는 것이다*/

//일반자료형의 데이터 관리 = 깊은 복사(값 자체를 가져오는 경우)
let num = 10;
let copyNum = num;
num = 20;
console.log(num); //20
console.log(copyNum); //10

/* 데이터 자료형은 두가지로 구분된다
일반 자료형 : 문자나 숫자 => 값 자체가 복사된다(깊은복사)
참조 자료형 : 객체 => 값 자체말고 값이 들어있는 메모리 주소가 복사된다(얕은복사)

깊은복사 => 복사 이후엔 원 데이터 값이 달라져도 문제없다
얕은복사 => 복사해준 원 데이터 값이 바뀌면 복사한 데이터도 바뀐다

자바&파이썬 => 깊은 복사는 메모리 주소가 달라진다(독립적이라 표현)
냩은 복사는 메모리주소가 같다(독립적이지않다)*/

const person = {
    name:"Hong Gildong"
  }
  const copyPerson = person; // 변수 person에 할당된 객체를 변수 copyPerson에 할당
  person.name="Hong"; // 변수 person에 할당된 객체의 값을 변경
  console.log(person.name); // Hong
  console.log(copyPerson.name); // Hong
  //객체는 참조 자료형이므로 메모리 주소를 복사했기 때문에 데이터를 바꾸면 같은 주소에 있는 데이터가 달라지니까 같이 달라진다