//-- setcookie("cookie_name", "cookie_value", time() + 3600, "/", "", true, true); --//
//-- Mostrar/ocultar buscar(placeholder) --//
const lupa = document.querySelector(".lupa");
const muestraPlaceholder = document.querySelector(".icono-placeholder-image");
lupa.addEventListener("click", () => {
  muestraPlaceholder.classList.toggle("activado");
});
//-- Mostrar y ocultar ventana de enlaces-menu --//
const logo = document.querySelector(".logo");
const enlaces = document.querySelector(".container-enlaces-menu");
logo.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
});
