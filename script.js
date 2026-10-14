document.documentElement.classList.add("js");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


/** for home page  */
const words = ["Web Developer", "DSA Problem Solver", "Python & C++ Coder", "Fast Learner"];
let w = 0, c = 0, deleting = false;
const typing = document.getElementById("typing");

function type() {
  const word = words[w];
  typing.textContent = word.slice(0, c);

  if (!deleting && c < word.length) { c++; setTimeout(type, 100); }
  else if (!deleting) { deleting = true; setTimeout(type, 1200); }
  else if (c > 0) { c--; setTimeout(type, 50); }
  else { deleting = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
type();



// in skills
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// final touch
/* highlight the menu tab of the section on screen */
const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll(".nav-links a");

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => spy.observe(s));

/* back to top button */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 500);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));



// for contect to animation 
window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 500);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#contact"));
  }
});