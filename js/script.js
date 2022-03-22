//Sidebar menu
let sideBar = document.querySelector(".sideBar");
let menuBtn = document.querySelector("#menuBtn");
let closeSideBar = document.querySelector("#closeSideBar");
let searchForm = document.querySelector(".searchForm");
let searchBtn = document.querySelector("#searchBtn");

menuBtn.onclick = () => {
  sideBar.classList.toggle("active");
  searchForm.classList.remove("active");
};

closeSideBar.onclick = () => {
  sideBar.classList.remove("active");
};

//Search menu in device = || > 768px
searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  sideBar.classList.remove("active");
};

//Scroll do mouse
window.onscroll = () => {
  sideBar.classList.remove("active");
  searchForm.classList.remove("active");
};
