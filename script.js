let clicks = 0;
const textoContador = document.getElementById("contador");
const botones = document.querySelectorAll(".redes button");
const botonSeguir = document.getElementById("seguir");
let siguiendo = false;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    boton.style.backgroundColor = "#FF7700";
    clicks = clicks + 1;
    textoContador.textContent = "Clicks: " + clicks;
  });
});

botonSeguir.addEventListener("click", function () {
  siguiendo = !siguiendo;
  if (siguiendo) {
    botonSeguir.textContent = "Siguiendo ✓";
  } else {
    botonSeguir.textContent = "Seguir";
  }
  clicks = clicks + 1;
  textoContador.textContent = "Clicks: " + clicks;
});
const inputComentario = document.getElementById("inputComentario");
const botonComentar = document.getElementById("botonComentar");
const listaComentarios = document.getElementById("listaComentarios");

botonComentar.addEventListener("click", function () {
  const texto = inputComentario.value;

  if (texto === "") {
    return;
  }

  const nuevoComentario = document.createElement("li");
  nuevoComentario.textContent = texto;
  listaComentarios.appendChild(nuevoComentario);

  inputComentario.value = "";
});
inputComentario.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    botonComentar.click();
  }
});
