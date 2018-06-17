$(document).ready(function() {
    //perfil tipo
    //show exposição
    //hide ocultar
    $('#tipo').on('change', function() {
        //alert(this.value);
        if (this.value == 'alunos') {
            $('#matricula').show();
            $('#escola').hide();
        } else if (this.value == 'visitantes') {
            $('#escola').show();
            $('#matricula').hide();
        } else if (this.value == 'null') {
            $('#escola').hide();
            $('#matricula').hide();
        }
    });
    $('#escola').hide();
    $('#matricula').hide();
});

function myFunction() {
    (window.open("erro.html"));
}