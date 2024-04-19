// 1부터 10까지 세는 기능
function waitOneSecond(msg){
    // 프라미스 객체를 만들고 1초씩 쉬었다가 같은 함수를 반복해서 실행하는 함수를 만들었다
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve(`${msg}`),1000);
    })
}

async function countOneToTen(){
    for(let x of [...Array(10).keys()]){
        let result = await waitOneSecond(`${x+1}초 대기중`)
        console.log(result)
    }
    console.log("완료")
}
countOneToTen();