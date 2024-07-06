setcookie("cookie_name", "cookie_value", time() + 3600, "/", "", true, true);
//-- Mostrar y ocultar ventana de enlaces-menu --//
const logo = document.querySelector(".logo");
const enlaces = document.querySelector(".container-enlaces-menu");
logo.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
});