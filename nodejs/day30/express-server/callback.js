const express = require("express");
const app = express();
const port = 3000;
const DB = [];
function register(user){
    return SVGAnimatedBoolean(user, function(user){ //콜백1
        return sendEmail(user,function(user){ // 콜백2
            return getReturn(user); // 콜백3
        })
    })
}
function saveDB(user,callback){
    // 코드 실행 시 입력받은 유저데이터를 push 명령어로 DP리스트 자료구저에 접합
    DB.push(user); // 자료구조에 입력받은 데이터 저장 후 save name to DB라는 메세지 출력
    console.log(`save ${user.name} to DB`);
    return callback(user);
    // 자료구조 저장 후 결과값 반환하여 다음 횟수가 입력값으로 쓸 수 있도록 함
};
function sendEmail(user,callback){
    console.log(`email to ${user.email}`);
    return callback(user);
}
function getReturn(user){
    return `success register ${user.name}`;
}
const result = register({email:"shcnu16@gmail.com",password:"1234", name:"shcnu16"})
console.log(result)
/* register콜백함수는 데이터를 받아서 DB변수에 저장한 뒤에 email주소를 출력하고 사람이름을 출력하는 일련의 과정을 순차적으로 콜백기능을 적극 활용하여
특정 과정이 먼저 진행되지 않도록 조치하였다.
함수안의 함수안의 함수이므로 실수하기 좋은 구조이다,.
실제 콜백은 에러나면 문제이다. 
7단계 콜백함수에서 각 함수의 코드가 수백줄이라 가정한다면 코드를 파악하기 어렵다.
콜백함수는 디버그에 취약해서 나온것이 프라미스이다.
프로미스란 promise라는 객체를 만들어서 이전 함수의 실행결과를 이행,대기,거절 3가지 상태로 구분하여 각 상태에 맞는 조건을 설정할 수 있다.
프로미스는 콜백에 성공과 실패 시 조건을 넣어서 개발자가 중간과정이 잘됬는지 안됬는지 알수 있게 조치*/
