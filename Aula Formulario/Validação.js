const form = document.getElementById("meuForm");

form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("e-mail").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (nome.trim() === "") {
        event.preventDefault();  // Impede o envio
        erro.textContent = "O nome é obrigatório!";
        erro.style.color = "red";
    }

    if (!email.includes("@gmail.com")) {
        event.preventDefault();
        erro.textContent = "E-mail inválido!";
    }
    limparFormulario();

   
});

 function limparFormulario() {
        form.reset();
    };
;
