const $sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
  makeStars();
}

const makeStars = () => {
  // 브라우저 가장 큰 크기
  const maxSize = Math.max(window.innerWidth, window.innerHeight)

  // 랜덤한 X 위치 값
  const getRandomX = () => Math.random() * maxSize;

  // 랜덤한 Y 위치 값
  const getRandomY = () => Math.random() * maxSize;

  // 랜덤한 크기 (circle는 반지름이 크기)
  const randomRadius = () =>  Math.random() * 0.7 + 0.6;
  
  // 임의의 값
  const _size = Math.floor(maxSize / 2);
  
  const htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
  }).join('');
  
  $sky.innerHTML = htmlDummy;
}

window.onload = () => {
  makeStars();
}

  $(window).scroll(function (){
    var height = $(window).scrollTop();
    console.log(height);
    /*  스크롤 범위 650-1150
     var y = a * 높이 + b;
     1 = a * 650 + b;
     0 = a * 1150 + b;
     a = -1/530
     b = 4
     */

     var y = -1/500 * height + 115/50;
     $('.card-box').eq(0).css('opacity',y);

     /*  스크롤 범위 650-1150
     var y = a * 높이 + b;
     1 = a * 650 + b;
     0.9 = a * 1150 + b;
     a = -0.0002
     b =  0.87
     */
     var z = (-1/5000) * height + 565/500;
     $('.card-box').eq(0).css('transform', `scale(${z})`);

     /*  스크롤 범위1400-1930
     var y = a * 높이 + b;
     1 = a * 1420 + b;
     0.9 = a * 1930 + b;
     a = -0.0002
     b =  0.87
         */
     var x = -1/510 * height + 3.784313725490196;
     var m = -1/5100 * height + 1.27843137254902;
     $('.card-box').eq(1).css('opacity',x);
     $('.card-box').eq(1).css('transform', `scale(${m})`);
 });