const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrarCadastrar = document.getElementById('entrarCadastrar');


entrarCadastrar.onclick = function(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == 'teste123@gmail.com' && senha == '123456'){
        window.location.assign ("quiz.html")
        alert ("Entrou com sucesso!")
    }
}
