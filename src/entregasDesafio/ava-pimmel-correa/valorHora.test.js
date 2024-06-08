const valorHora = require('../../dominio/calculadora/Hora/valorHora');

var testeGenerico = (valHoraEsperado, valorSalario, stringTeste) => {
    test(stringTeste, () => {
        const calculo = valorHora.calcularValorPorHora(valorSalario);
        expect(calculo).toBe(valHoraEsperado);
    });
};

describe( 'Teste do calculo valor da hora', () => {
    testeGenerico(18, 3000, 'Teste para salario 3000');
    testeGenerico(23, 4000, 'Teste para salario 4000');
    testeGenerico(86, 15000, 'Teste para salario 3000');
});
