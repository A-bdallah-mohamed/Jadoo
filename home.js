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
document.querySelectorAll(".animation").forEach(animation => {
    animation.classList.add("show")
  })

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

const phonemenu = document.getElementById("phonemenu");
const togglebutton = document.getElementById("togglephonemenu");

togglebutton.addEventListener("click", () => {
  phonemenu.classList.toggle("phonemenushow");
  document.documentElement.style.overflowY = phonemenu.classList.contains("phonemenushow") ? "hidden" : "auto";
});

window.addEventListener("click", (e) => {
  if (
    phonemenu.classList.contains("phonemenushow") &&
    !phonemenu.contains(e.target) &&
    !togglebutton.contains(e.target)
  ) {
    phonemenu.classList.remove("phonemenushow");
    document.documentElement.style.overflowY = "auto"; 
  }
});

document.querySelectorAll("a").forEach(a=>{
  a.addEventListener('click', e => {
        phonemenu.classList.remove("phonemenushow");
      document.documentElement.style.overflowY = "auto";
  })
})

window.addEventListener('scroll',()=> {
  const scroll = window.scrollY
  if(scroll > 1) {
document.querySelector("header").classList.add("headerfixed")
console.log("scrolled")
  }
  else if (scroll == 0){
    document.querySelector("header").classList.remove("headerfixed")
    console.log("not scrolled")

  }
})