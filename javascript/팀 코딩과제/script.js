(function(){ // 화면이 열리자마자 글자를 보여주는 함수가 실행해야 하므로 즉시실행함수로 작성
    spanEl = document.querySelector("main h2 span");
    const txtArr =  ['web publisher', 'front-end developer', 'ux designer', 'back-end developer'];
    let index = 1;
    let currentTxt = txtArr[index].split("");
    
    function writeTxt(){
        spanEl.textContent += currentTxt.shift(); //배열의 요소를 한개씩 출력 shift()=배열에서 맨 앞의 글자를 추출하고 추출된 글자를 원본에서 버린다
        if(currentTxt.length !== 0){ //아직 보여줘야할 글자가 남아 있다면
            setTimeout(writeTxt,Math.floor(Math.random()*100)); //writeTxt에 남아있는 글자 데이터 셋에 남은 글자를 반복해서 하나씩 계속 보여준다. (0에서 0.1초 사이)
            //단, 글자 보여줄때 글자보여주는 속도를 글자마다 랜덤하게 바꾼다
            //sestTimeout(x,1000) = 뒤의 숫자가 몇 초마다 보여달라는 말이다. 뒤의 숫자를 random처리해서 글자마다 다른 속도를 갖도록 처리한다.
        }
        else{// 표시할 글자가 더이상 없다면 텍스트를 지워야 한다. 텍스트를 지우기 위해서 화면의 표시된 문장을 데이터에 집어넣고 deleteTxt라는 함수를 통해 화면의 글자를 삭제한다.
            currentTxt = spanEl.textContent.split(""); //화면에 있는 모든 글자를 currentTxt로 한개씩 회수
            setTimeout(deleteTxt,3000);
        }
    }
    function deleteTxt(){
        
        currentTxt.pop();// 가져온 텍스트 데이터를 끝에서부터 하나씩 삭제 ( pop() = 배열의 마지막 요소 제거, 제거된 요소 리턴 )
        spanEl.textContent = currentTxt.join(""); // 글자 삭제 후 한글자씩 짤려있는 문자열을 원상태로 돌린다.
        if(currentTxt.length !== 0){ // 글자하나 짜르고 나서 아직 글자가 남아있다면 모든 글자가 사라질때까지 함수 실행 특이점은 아래 함수는 자기자신을 돌린다는 뜻이다(재귀함수)
            setTimeout(deleteTxt,Math.floor(Math.random()*100));
        }
        else{ //글자를 다 짜르고 나면
            index = (index+1) % txtArr.length; //인덱스 숫자를 하나 늘려서 다음 문장을 새로 받아온다
            currentTxt = txtArr[index].split(""); // 다음 문장을 새로 받아온 후 writeTxt(); 실행시켜서 화면에 한글자씩 다시 표시
            writeTxt();
        }
    }
    writeTxt();
})();


