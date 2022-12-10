function mudaTema() {
  document.body.classList.toggle("dark");
  var tema = document.getElementById("botaoTema");
  if (tema.innerHTML == "Modo escuro") {
    tema.innerHTML = "Modo claro";
  } else {
    tema.innerHTML = "Modo escuro";
  }
}