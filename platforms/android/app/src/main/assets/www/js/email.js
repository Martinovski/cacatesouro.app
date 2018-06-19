//validação do email html
function verifica() {
    if ( //document.querySelector('#email').value.length == 0) {
        document.forms[0].email.value.length == 0) {
        alert('Por favor, informe o seu EMAIL.');
        document.frmEnvia.email.focus();
        return false;
    }
    return true;
}
//validação do email html
function checarEmail() {
    if ( //document.querySelector('#email').value == "" ||      document.querySelector('#email').value.indexOf('@') == -1 ||        document.querySelector('#email').value.indexOf('.') == -1) {
        document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }
}
//Verificar e implementar forma de validar que o usuário ja esteve 
//presente na católica, afim de evitar duplicação de informações.
function emailData() {

    var url = "https://floating-forest-87711.herokuapp.com/pessoas.json?email=" + document.querySelector('#email').value;

    var payload = {};
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var init = {
        method: "get",
        headers: headers,
        body: JSON.stringify(payload)
    };
    alert(init);
    fetch(url, init)
        .then(resp => {
            alert(init);
            return resp.json();
            //return resp.json();
        })
        .then(json => {
            //document.querySelector(".response").classList.remove("text-danger");
            //document.querySelector(".response").classList.add("text-success");
            //document.querySelector(".modal-box-conteudo").innerText = JSON.stringify(json);
            alert('jogo')
            window.open('jogo.html')
                //console.log(json);
        })
        .catch(err => {
            //document.querySelector(".response").classList.remove("text-success");
            //document.querySelector(".response").classList.add("text-danger");
            //document.querySelector(".response").innerText = err.message;
            alert(init);
            alert('cadastro');
            window.open('cadastro.html')
                //console.log;
        });
}