let contador = 0;

const numero = document.getElementById("numero");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const zerar = document.getElementById("zerar");

mais.addEventListener("click", () => {
  contador++;
  atualizar();
});

menos.addEventListener("click", () => {
  contador--;
  atualizar();
});

zerar.addEventListener("click", () => {
  contador = 0;
  atualizar();
});

function atualizar() {
  numero.textContent = contador;

  if (contador > 0) {
    numero.style.color = "green";
  } else if (contador < 0) {
    numero.style.color = "red";
  } else {
    numero.style.color = "black";
  }
}
