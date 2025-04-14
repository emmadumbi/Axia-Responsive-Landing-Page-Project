const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  // Optional: Store user preference in localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On load, apply stored theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
