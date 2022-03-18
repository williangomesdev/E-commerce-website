let isOpen = document.querySelectorAll(".detailsContainer .details");

isOpen.forEach((details) => {
  details.onclick = () => {
    details.classList.toggle("active");
  };
});
