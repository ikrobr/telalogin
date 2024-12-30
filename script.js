
function nameuser(event) {
    event.preventDefault();

    var nome = document.querySelector("#nome");
    var value = nome.value;
    var conteudo = document.querySelector("#conteudo");
    conteudo.innerHTML = value + ", seja bem-vindo(a) à nossa página! &#127811;";
}

document.getElementById('login').addEventListener('submit', nameuser);
