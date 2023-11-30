let cadastrarBotao = document.getElementById("cadastrarBotao");
let entrarBotao = document.getElementById("entrarBotao");
let nomeCampo = document.getElementById("nomeCampo");
let titulo = document.getElementById("titulo");

entrarBotao.onclick = function(){
    nomeCampo.style.maxHeight = "0";
    titulo.innerHTML = "Logar";
    entrarBotao.style.display = "none";
    cadastrarBotao.style.display = "block";
    jaConta.innerHTML = "Não tem uma conta?";
    entrarCadastrar.innerHTML = "Entrar";
}

cadastrarBotao.onclick = function(){
    nomeCampo.style.maxHeight = "60px";
    titulo.innerHTML = "Cadastrar";
    cadastrarBotao.classList.remove("desativar");
    entrarBotao.classList.add("desativar");
    cadastrarBotao.style.display = "none";
    entrarBotao.style.display = "block";
    jaConta.innerHTML = "Já tem uma conta?";
    entrarCadastrar.innerHTML = "Cadastrar";
}

