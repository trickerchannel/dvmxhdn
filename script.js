// Hiệu ứng gửi form
document.getElementById("contactForm").addEventListener("submit", function(e){
  alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ phản hồi sớm.");
});
// Hiệu ứng gửi form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
  this.reset();
});

// Hiệu ứng hiện bảng giá khi cuộn tới
window.addEventListener("scroll", function(){
  const pricingTable = document.querySelector("table");
  const position = pricingTable.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(position < screenHeight - 100){
    pricingTable.style.opacity = "1";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
// Nút Back to Top
const backToTopBtn = document.getElementById("backToTop");

// Hiện nút khi cuộn xuống
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Khi click thì cuộn mượt lên đầu
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});