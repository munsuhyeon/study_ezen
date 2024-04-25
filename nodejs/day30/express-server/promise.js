const DB = [];

// promise는 이전함수의 결과가 콜백처럼 연결되지 않으므로 (user,callback)이런식으로 결과를 인풋받지 않는다.
function saveDB(user){
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    // 결과값 자체를 전달치 않고 promise라는 객체를 생성하여 객체안에 (resolve, reject)를 입력값으로 받는 함수를 생성한다.
    // (resolve = 이행, reject = 대기)
    return new Promise((resolve, reject) => {
        if(DB.length > oldDBSize){
            // 성공한 경우 유저정보를 반환
            resolve(user)
        }else{
            // 실패시 에러 문구 생성
            reject(new Error("DB error"));
        }
    })
}
function sendEmail(user){
    console.log(`email to ${user.email}`);
    // 실패처리가 없다. 그냥 메세지 출력
    return new Promise((resolve)=> {
        resolve(user);
    })
}
function getReturn(user){
    return new Promise((resolve,reject)=>{
        resolve(`success register ${user.name}`);
    })
}
function registerByPromise(user){
    const result1 = saveDB(user).then(sendEmail).then(getReturn);
    console.log(result1);
    return result1;
}
const myUser = {email:"shcnu16@gmail.com",password:"1234", name:"shcnu16"};
const result = registerByPromise(myUser);
result.then(console.log);