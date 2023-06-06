document.addEventListener("click", (e) => {
  const dropdownButton = e.target.matches("[data-dropdown-button]");
  if (!dropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let actualDropdown;
  if (dropdownButton) {
    actualDropdown = e.target.closest("[data-dropdown]");
    actualDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === actualDropdown) return;
    dropdown.classList.remove("active");
  });
});
