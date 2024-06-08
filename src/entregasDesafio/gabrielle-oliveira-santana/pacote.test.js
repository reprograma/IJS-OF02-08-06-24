const { calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe("Calcular pacote", () => {
    test('calculcar pacote basico 23 horas', () => {
        const retorno = calcularPacote(23);
        const esperado = 'pacote_basico';
        expect(esperado).toBe(retorno);
    });
});