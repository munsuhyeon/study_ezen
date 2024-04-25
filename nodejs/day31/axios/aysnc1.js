// 1부터 10까지 세는 기능
function waitOneSecond(msg){
    // 프라미스 객체를 만들고 1초씩 쉬었다가 같은 함수를 반복해서 실행하는 함수를 만들었다
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve(`${msg}`),1000);
    })
}

async function countOneToTen(){
    // [...Array(10).keys()] 0부터 9까지의 정수를 가지고 있는 배열이다. [0,1,2,3,4,5,6,7,8,9]
    // 배열안에 수를 하나씩 꺼내 써야해서 구조분해할당을 사용
    // 구조분해할당이란 배열과 같은 한 변수에 담긴 여러개의 데이터를 개별 데이터로 쪼개서 하나씩 열람이 가능하게 하는 기능이다.
    // 구조분해할당의 사용법은 ...을 붙이면된다.
    for(let x of [...Array(10).keys()]){
        let result = await waitOneSecond(`${x+1}초 대기중`)
        console.log(result)
    }
    console.log("완료")
}
countOneToTen();