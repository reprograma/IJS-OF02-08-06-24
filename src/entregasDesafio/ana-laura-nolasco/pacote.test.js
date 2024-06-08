const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe("Testes para o tipo de pacote", () => {

    test("calcular pacote basico quando 23 horas",()=>{
        const retornado = calcularPacote(23);
        const esperado = 'pacote_basico';
        expect(esperado).toBe(retornado);
    });

    test("calcular pacote basico quando 50 horas",()=>{
        const retornado = calcularPacote(50);
        const esperado = 'pacote_basico';
        expect(esperado).toBe(retornado);
    });

   
});
