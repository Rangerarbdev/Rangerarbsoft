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
//-- Mostrar ventana cuenta personal --//
//--const cuenta=document.querySelector('#cuenta-personal');const cuentaPersonal=document.querySelector('.vent-rigth');cuenta.addEventListener('click',() => {cuentaPersonal.classList.toggle('activado');});
//-- Mostrar ventana de presentación de Nosotros --//
const itemUno = document.querySelector(".item-uno");
const contRangerarbsoft = document.querySelector(".container-rangerarbsoft");
itemUno.addEventListener("click", () => {
  contRangerarbsoft.classList.toggle("activado");
});
function mostrarRangerarbsoft() {
  if (
    (document.querySelector(".container-rangerarbsoft").style.display = "block")
  );
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".container-garantia").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
