//Você já deve ter visto em vários sites uma janela modal.
//Para quem não a conhece pelo nome é aquela janela que
//quando clicamos para abri-la ela escurece o resto do site
//e coloca uma pequena janela em evidência e se você clicar
//fora da janela ela desaparece.

//tela inicial e a tela jogo
$(document).ready(function(e) {
    $('.btn_modal').click(function() {
        $('#modal').fadeIn(10);
    });

    $('.fechar, #modal').click(function(event) {
        if (event.target !== this) {
            return;
        }
        $('#modal').fadeOut(10);
    });
});