const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto');

var testeGenerico = (arrayFuncionalidades, valorTotalEsperado, stringTeste) => {
    test(stringTeste, () => {
        const calculo = horasPorProjeto.calcularHorasDeProjeto(arrayFuncionalidades);
        expect(calculo).toBe(valorTotalEsperado);
    });
};

describe( 'Teste do calculo de horas em um projeto com X funcionalidades', () => {
    testeGenerico(
        arrayFuncionalidades = ['construcao_1_pagina'],
        valorTotalEsperado = 8,
        'Projeto com 1 pagina'
    );
    testeGenerico(
        arrayFuncionalidades = ['construcao_1_pagina', 'construcao_1_pagina'],
        valorTotalEsperado = 16,
        'Projeto com 2 paginas'
    );
    testeGenerico(
        arrayFuncionalidades = ['construcao_1_pagina', 'formulario', 'ssr'],
        valorTotalEsperado = 32,
        'Projeto com 1 pagina, formulario e ssr'
    );
});
