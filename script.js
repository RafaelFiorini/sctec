function verificaNota() {
  const nota = document.getElementById("nota").value;
  const resultado = document.getElementById("resultado");
  if (nota >= 7) {
    resultado.textContent = "Aprovado!";
  } else {
    resultado.textContent = "Reprovado!";
  }
}

console.log("foi, foi pra conta");
