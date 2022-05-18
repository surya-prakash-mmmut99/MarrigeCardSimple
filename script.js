const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
})




var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate:5,
    stretch:12,
    depth:1200,
    modifier: 1,
    slideShadows:true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});