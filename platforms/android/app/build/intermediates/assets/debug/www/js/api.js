function postData() {

    var url = 'https://floating-forest-87711.herokuapp.com/pessoas.json'

    var payload = {
        nome: document.querySelector('#nome').value,
        tipo: document.querySelector('#tipo').value,
        matricula: document.querySelector('#matricula').value,
        escola: document.querySelector('#escola').value,
        email: document.querySelector('#email').value
    }

    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    var init = {
        method: 'post',
        headers: headers,
        body: JSON.stringify(payload)
    }
    fetch(url, init)
        .then(resp => {
            Pessoa.id = resp.id;
            Pessoa.nome = resp.nome;
            Pessoa.tipo = resp.tipo;
            Pessoa.matricula = resp.matricula;
            Pessoa.escola = resp.escola;
            Pessoa.email = resp.email;
            return resp.json(window.open('jogo.html'))
        })


}

function getData() {

    var url = "https://floating-forest-87711.herokuapp.com/pistas.json";

    var payload = {};
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var init = {
        method: "get",
        headers: headers,
        body: JSON.stringify(payload)
    };
    fetch(url, init)
        .then(resp => {
            return resp.json();
        })
        .then(json => {
            //document.querySelector(".response").classList.remove("text-danger");
            //document.querySelector(".response").classList.add("text-success");
            document.querySelector(".modal-box-conteudo").innerText = JSON.stringify(json);
        })
        .catch(err => {
            //document.querySelector(".response").classList.remove("text-success");
            //document.querySelector(".response").classList.add("text-danger");
            //document.querySelector(".response").innerText = err.message;
            console.log;
        });
}