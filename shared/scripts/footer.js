const currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.getElementById("current-year");
  yearElements.textContent = currentYear;
});
