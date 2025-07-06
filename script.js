
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault(); // evita envio real do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if(nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  document.getElementById("resposta").textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  
  this.reset();
});
