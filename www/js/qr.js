document.addEventListener('deviceready', onDeviceReady, false)
    //escanear tela inicial
function onDeviceReady() {
    try {
        document.getElementById('qr_btn1').onclick = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    $('.modal-box-conteudo').html(result.text);
                    // var getData = getData()
                    // $('#pontos').html(getData[pontos])
                    // $('#local').html(getData[localizacao])
                    // $('#pistasfaltam').html(getData[numero])
                },
                function(error) {}
            )
        }
    } catch (err) {
        console.log(err);
    }
    //escanear tela jogo
    try {
        document.getElementById('qr_btn2').onclick = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    //var data = getData()
                    //$('#pontos').html(data[pontos])
                    //$('#local').html(data[localizacao])
                    //$('#pistasfaltam').html(data[numero])
                    $('.modal-box-conteudo').html(result.text)
                },
                function(error) {}
            )
        }
    } catch (erro) {
        console.log(erro);
    }
}

// Caso QRScanner seja undefined utilize window.QRScanner
// QRScanner.scan(leitor)