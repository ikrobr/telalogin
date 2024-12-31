
function nameuser(event) {
    event.preventDefault();

    var nome = document.querySelector("#nome");
    var value = nome.value;
    localStorage.setItem("usuarioN", value);
    window.location.href = "poslogin.html";
}

document.getElementById('login').addEventListener('submit', nameuser);
