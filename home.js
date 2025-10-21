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

window.addEventListener("load", () => {
  // Add "show" classes
  document.getElementById("traveller").classList.add("show");
  document.getElementById("plane1").classList.add("show");
  document.getElementById("plane2").classList.add("show");
  document.querySelector("header").classList.add("show");
document.getElementById("smallheading").classList.add("show")
document.getElementById("mainheading").classList.add("show")
document.getElementById("paragraph").classList.add("show")
document.getElementById("button1").classList.add("show")
document.getElementById("button2").classList.add("show")
document.querySelector("span").classList.add("showspan")



  // Typing function
  function type(i, full, component) {
    if (i < full.length) {
      component.textContent += full.charAt(i);
      i++;
      setTimeout(() => type(i, full, component), 30); // pass args again
    }
  }





});


function initParallaxScenes() {
  const scenes = document.querySelectorAll('.scene');

  scenes.forEach((scene) => {
    new Parallax(scene);
  });
}

// ✅ Run it
initParallaxScenes();



