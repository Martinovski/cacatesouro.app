document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
    try {
        document.getElementById('qr_btn').onclick = function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    $('.modal-box-conteudo').html(result.text)
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
    try {
        document.getElementById('qr_btn1').onclick = function() {
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
        console.log(err);
    }
}

// Caso QRScanner seja undefined utilize window.QRScanner
// QRScanner.scan(leitor)