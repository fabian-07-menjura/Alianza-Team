const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
AOS.init();
