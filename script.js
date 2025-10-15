// function mostrar() {
//     var usuario = document.getElementById("US").value;
//     var senha = document.getElementById("senha").value;

//     if (usuario === "Felipe" && senha === "1234") {
//       // Redireciona se o login estiver correto
//       window.location.href = "indexx.html";
//     } else {
//       alert("Usuário ou senha incorretos");

//     }
//   }

function login() {
  var logado = 0;
  var usuario = document.getElementsByName('usuario')[0].value
  usuario = usuario.toLowerCase();
  var senha = document.getElementById('senha').value
  senha = senha.toLowerCase();
  if (usuario == "Felipe" && senha == "1234") {
    window.location = "index.html"
    logado = 1;
  }
  if (logado == 0) {
    alert("Acesso negado, Dados incorretos");
  }
}

function cadastro(){
    alert("Cadastrado com sucesso!")
    window.location.href="index.html"
}