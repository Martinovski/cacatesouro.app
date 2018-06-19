$(document).ready(function() {
    //perfil tipo
    //show exposição
    //hide ocultar
    $('#tipo').on('change', function() {
        //alert(this.value);
        if (this.value == 'alunos') {
            $('#matricula2').show();
            $('#escola2').hide();
        } else if (this.value == 'visitantes') {
            $('#escola2').show();
            $('#matricula2').hide();
        } else if (this.value == 'null') {
            $('#escola2').hide();
            $('#matricula2').hide();
        }
    });
    $('#escola2').hide();
    $('#matricula2').hide();
});

function myFunction() {
    (window.open("erro.html"));
}