const { calcularPacote } = require('../../dominio/calculadora/Projeto/Pacote');

describe("Calcular pacote por horas", () => {
    test("Calcular pacte basico quando 23 horas", () => {
        const retornado = calcularPacote(23);
        const esperado = 'pacote_basico'; 
        expect(esperado).toBe(retornado);
    });
});
