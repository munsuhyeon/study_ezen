
//Math.random()으로 0 ~ 1 사이의 실수 호출
//Math.random()*45 = 0 ~ 45 사이의 실수를 호출(0~44.9999999999)
//Math.floor (내림)을 적용하여 소수점을 정수로 맞춘다(0~44)
//Math.floor(Math.random() * 45) 이 중간결과에 1 더하면 1~45 정수가 하나 무작위로 추출된다.

// 무작위 정수 생성방법
// 예시) 1 ~ 45 사이의 정수를 무작위로 추출하려 들때

// 1. Math.random()으로 0에서 1사이의 실수를 호출
// 2. 여기에 45를 곱해서 0 ~ 45 사이의 실수를 호출
// 3. 그담에 Math.floor (내림)을 적용하여 소수점을 정수로 맞춘다
// 근데 Math.floor 쓰면 내림 기능으로 0 ~ 44까지의 정수만 나온다
// 왜? 44.999999999999 는 44니까
// 4. Math.floor(Math.random() * max) 이 중간결과에 1 더하면
// 1 ~ 45 중 정수가 하나 튀어나옴
function getMaxRandom(max){
  return Math.floor(Math.random() * max) + 1
}
const maxRandom = getMaxRandom(20); 
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수
console.log("=====================")
  let num = Math.floor(Math.random()*2);
  console.log(num);
