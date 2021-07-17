const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;
bgimg.classList.add("bgimg");

document.body.appendChild(bgimg);
