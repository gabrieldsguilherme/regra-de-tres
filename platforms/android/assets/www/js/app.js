$(document).ready(function() {
    'use strict';
    $('#resultado-div').hide();
    $('#refazer').hide();
});

function calcular() {
    'use strict';

    let valorSe = getValorCampo('valor-se');
    let valorEquivale = getValorCampo('valor-equivale');
    let valorEntao = getValorCampo('valor-entao');
    let valorResultado = 0;

    if (valorSe == '' || valorEquivale == '' || valorEntao == '') {
        Materialize.toast('Preencha os campos para continuar!', 3000);
    } else {
        if($('#inversamente-proporcional').prop('checked')) {
            valorResultado = (valorEquivale * valorSe) / valorEntao;
        } else {
            valorResultado = (valorEquivale * valorEntao) / valorSe;
        }
        exibirResultado(valorResultado);
    }
}

function refazer() {
    'use strict';
    $('#valor-se').val('');
    $('#valor-equivale').val('');
    $('#valor-entao').val('');
    $('#valor-resultado').val('');
    $('#resultado').text('');
    $('#resultado-div').hide('150');
    $('#label-valor-x').show('150');
    $('#valor-x').show('150');
    $('#calcular-div').show('500');
    $('#refazer').hide('150');
}

function getValorCampo(idCampo) {
    'use strict';
    return document.getElementById(idCampo).value;
}

function exibirResultado(valorResultado) {
    'use strict';
    $('#resultado').text(valorResultado);
    $('#resultado-div').show('150');
    $('#label-valor-x').hide('150');
    $('#valor-x').hide('150');
    $('#calcular-div').hide('150');
    $('#refazer').show('150');
}