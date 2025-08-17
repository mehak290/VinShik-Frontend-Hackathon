// script.js
const items = document.querySelectorAll(".sidebar ul li");

items.forEach(li => {
  li.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    li.classList.add("active");
  });
});
