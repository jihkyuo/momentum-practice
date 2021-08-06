const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// images Array 안에 Element들을 검색할때 images[0 ~ 2]로 하는데, 랜덤한 수를 주기 위하여 Math.floor(1.8) => 1 반내림 함수 + Math.random() 랜덤 수에 * Array길이

const bgimg = document.createElement("img");

function changeImg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgimg.src = `img/${chosenImage}`;
}

bgimg.classList.add("bgimg");

// 생성된 img 안의 경로인 src에 입력

document.body.appendChild(bgimg);
changeImg();
setInterval(changeImg, 8000);
