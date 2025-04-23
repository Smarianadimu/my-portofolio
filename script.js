// Toggle Dark Mode
const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleDark.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});