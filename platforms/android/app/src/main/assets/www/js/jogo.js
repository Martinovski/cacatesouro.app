// requisição
$(document).ready(function() {
    $('#qr_btn').on('click', function() {
        // requisição post e get
        // xhttp.open("GET", "demo_get.asp", true)
        // xhttp.send()
        var xhttp = new XMLHttpRequest()
        xhttp.open('POST', '?', true)
        xhttp.send('#pontos', '#pistasfaltam')
    })
})