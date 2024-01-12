const ham=document.querySelector(".ham");
const navMenu= document.querySelector(".nav-menu");
ham.addEventListener("click", ()=>{
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
  ham.classList.remove("active");
  navMenu.classList.remove("active");
}))
window.addEventListener("scroll", ()=>{
  ham.classList.remove("active");
  navMenu.classList.remove("active");
})

let valdis=document.querySelectorAll(".count");
let interval = 5000;

valdis.forEach(valdis=>{
  let startVal=0;
  let endVal= parseInt(valdis.getAttribute("data-target"));
  // console.log(endVal);
  let duration = Math.floor(interval/endVal);
  let counter = setInterval(function(){
    startVal += 2;
    valdis.textContent= startVal;
    if(startVal == endVal){
      clearInterval(counter);
    }
  }, duration);
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });