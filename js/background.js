const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// images Array 안에 Element들을 검색할때 images[0 ~ 2]로 하는데, 랜덤한 수를 주기 위하여 Math.floor(1.8) => 1 반내림 함수 + Math.random() 랜덤 수에 * Array길이

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;
bgimg.classList.add("bgimg");

// 생성된 img 안의 경로인 src에 입력

document.body.appendChild(bgimg);
