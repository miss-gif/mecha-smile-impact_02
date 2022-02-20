new Swiper(".about .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".about .swiper-prev", // 이전 버튼 선택자
    nextEl: ".about .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".live .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".live .swiper-prev", // 이전 버튼 선택자
    nextEl: ".live .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".exhibition .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".exhibition .swiper-prev", // 이전 버튼 선택자
    nextEl: ".exhibition .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".sales .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".sales .swiper-prev", // 이전 버튼 선택자
    nextEl: ".sales .swiper-next", // 다음 버튼 선택자
  },
});

let 카드뒤집기 = document.querySelector(".card");

카드뒤집기.addEventListener("click", function () {
  alert("3");
});

//포트폴리오 열고 닫는 기능

let 포트폴리오_공지사항 = document.querySelector(".포트폴리오_공지사항"); // 포트폴리오_공지사항 열기 버튼
let 포트폴리오_공지사항_텍스트 = document.querySelector(".포트폴리오_공지사항_텍스트");
let 포트폴리오_공지사항_닫기버튼 = document.querySelector(".포트폴리오_공지사항_닫기버튼");

포트폴리오_공지사항.addEventListener("click", function () {
  포트폴리오_공지사항_텍스트.style.display = "block";
});

포트폴리오_공지사항_닫기버튼.addEventListener("click", function () {
  포트폴리오_공지사항_텍스트.style.display = "none";
});

let 자세히보기_버튼 = document.querySelector(".details_btn"); // 자세히 보기 버튼
let 전시전_주의사항 = document.querySelector(".전시전_주의사항");
let 전시전_주의사항_닫기버튼 = document.querySelector(".전시전_주의사항_닫기버튼");

자세히보기_버튼.addEventListener("click", function () {
  전시전_주의사항.style.display = "block";
});

전시전_주의사항_닫기버튼.addEventListener("click", function () {
  전시전_주의사항.style.display = "none";
});
