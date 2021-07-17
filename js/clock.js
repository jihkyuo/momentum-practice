const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// padStart를 사용하기 위해 String 함수를 이용해 시간들을 변환하였다.
// padStart(자리수, "채워넣을 문자")

getClock();

// getClock() 함수를 바로 실행시킴으로써 페이지가 열리자마자 시간이 표시되게 하였다

setInterval(getClock, 1000);

// 1000ms = 1s 단위로 함수를 반복하여 실행시키는 setInterval 함수

// setTimeout(함수, 시간) 을 이용하면 함수가 일정 시간 뒤에 실행된다
