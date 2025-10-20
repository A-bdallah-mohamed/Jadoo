const container = document.getElementById("container");
const children = Array.from(container.children);
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevbtn");
const pagination = document.getElementById("custom-pagination")
let activeIndex = 0; 


pagination.innerHTML = children.map((_, i) => `<div class="pagination-dot"></div>`).join("");


function updateClasses() {
  children.forEach(c => c.className = "slide");

  const prevIndex = (activeIndex - 1 + children.length) % children.length;
  const nextIndex = (activeIndex + 1) % children.length;

  children[prevIndex].classList.add("prev");
  children[activeIndex].classList.add("active");
  children[nextIndex].classList.add("next");

  pagination.querySelectorAll(".pagination-dot").forEach((dot,i) => {
    dot.classList.toggle("activepag", i === activeIndex)
  })
}

updateClasses();

nextBtn.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % children.length;
  updateClasses();
});

prevBtn.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + children.length) % children.length;
  updateClasses();
});


