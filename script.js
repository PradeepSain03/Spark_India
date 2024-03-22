const showNav = document.querySelector(".show-nav");
const showbutton = document.querySelector(".show-button");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

showNav.addEventListener("click", () => {
  nav.style.width="400px"
  nav.style.display="flex"
  showbutton.style.display="none"
});
closeNav.addEventListener("click", () => {
  console.log("Hii")
  nav.style.display="none"
  showbutton.style.display="block"
});

