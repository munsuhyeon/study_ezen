const spanEl = document.querySelector("main h2 span");
const txtArr = ['Front-End Developer','Wdb Publisher','UX Designer','Back-End Developer'] // 화면에 표시할 문장 데이터
let index = 0; // txtArr 문장 선택 값
let currentTxt = txtArr[index].split("");
console.log(currentTxt.pop());
console.log(spanEl.textContent = currentTxt.join(""));
(function(){
    function writeTxt(){
        spanEl.textContent += currentTxt.shift(); // shift() = 배열의 맨 앞에 값을 제거한다.
        if(currentTxt.length !== 0){
            setTimeout(writeTxt,Math.floor(Math.random()*100));
        } else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt,3000);
        }
    }

    function deleteTxt(){
        currentTxt.pop(); //pop() = 배열의 마지막 요소 제거, 제거된 요소 리턴
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt,Math.floor(Math.random()*100));
        }else{
            index = (index+1) % txtArr.length; //무한반복
            currentTxt = spanEl.textContent.split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();
/*
1. html 내부 위치 지정 후 spanEl변수에 저장
2. txtArr 변수에 홈페이지에 표시할 4문장을 배열데이터를 통해 저장
3. 4문장 표시 순서를 지정하는 index변수 선언
4. txtArr[index].split("")을 통해서 문장을 개별 글자로 쪼갬
5. writeTxt()함수를 정의해서 쪼개진 글자를 화면에 하나씩 표시하고 표시하고 난 글자는 txtArr에서 삭제함
6. 화면에 모든 글자 표시 후 txtArr에서 모든 데이터가 지워 졌다면 다시 화면의 글자를 불러들여서 currentTxt에 도로 저장
7. deleteTxt()함수를 정의해서 이번엔 화면에 남은 글자를 하나씩 삭제함
8. 화면의 글자가 모두 삭제되면 index값을 1 증가 시켜서 다음 문장을 표시할 준비를 마침
보통 함수를 html에서 실행시키려면 onclick=함수이름() 등으로 마우스 클릭 등의 이벤트로 함수를 실행시켜야한다.
근데 화면에 표시되는 자바스크립트 컨텐츠는 홈페이지 켜자마자 함수가 실행되는 걸 볼 수 있다
이 함수는 "즉시" 실행되어야 한다(즉시실행함수)
*/
