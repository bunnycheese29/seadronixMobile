// function average(a, b) {
//   const avg = (a + b) / 2;
//   console.log(avg);
// }
// average(222, 2233);

Splitting();

//click은 콜백함수
const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
//li > a -메뉴  li < .depth02 -서브메뉴
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll(".gnb > .list > li > .depth02");
const animals = ["강", "고", "송", "4", "5", "6"];
const depth01Total = depth01.length;
const depth02Total = depth02.length;

for (let i = 0; i < depth01.length; i++) {
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < depth02.length; j++) {
      depth02[j].classList.remove("on");
    }
    depth02[i].classList.add("on");
  });
}

btnAll.addEventListener("click", function () {
  //   console.log("btnAll 클릭");
  //   header.classList.add("on");
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
  //   header.classList.toggle("on"); 토글로 한줄로 처리
});

new Swiper(".visual__list", {
  //effect: slide, cube, fade,cover-flow, flip, creative, cards
  effect: "cube",
  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
    clickable: true,
  },
  cubeEffect: {
    shadow: false,
  },
});

new Swiper(".news-banner", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
});

//visual__txt 움직이기
gsap.to(".visual__txt .char", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power4",
  stagger: 0.02,
});
