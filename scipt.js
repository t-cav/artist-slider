const openBtn = document.querySelector(".open-modal");
const closesBtn = document.querySelector(".closes-modal");
const overlay = document.querySelector(".overlay")

openBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

closesBtn.addEventListener("click", () => {
  overlay.style.display = "none";
})
      
