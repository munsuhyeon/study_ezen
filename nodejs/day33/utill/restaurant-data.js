// 별도의 자바스크립트로 코드를 빼서 실행할려면 별도로 뺀만큼 모듈을 재선언한다
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname,'..','data','restaurants.json');

// json데이터셋 내의 값을 읽어서 사용가능하게 해석해둔 코드 파트를
// getStoreRestaurants 이라는 함수로 따로 뺐다.
// 지금 코드 안의 getStoreRestaurants 함수만 컴포넌트화 한 것이다.
function getStoreRestaurants(){
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    return storedRestaurants;
}

function storedRestaurants(storedRestaurants){
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants)); // 입력받은 데이터를 json에 기록
}

// 별도 파일안의 결과들은 파일 밖으로 내보낸다는 명령어가 있어야
// 외부에서 지금 코드의 함수에 접근하여 사용할 수 있다
module.exports = {
    getStoreRestaurants:getStoreRestaurants,
    storedRestaurants:storedRestaurants
};