const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote");

// jest.mock('../../dominio/calculadora/Projeto/pacote');


describe('pacote basico', () => {

    test("calcular valor total do projeto quando 30 horas e 30 reais/hora",()=>{
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });

});

describe('pacote intermediario', () => {

    test("calcular valor total do projeto quando 112 horas e 30 reais/hora",()=>{
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade","formulario", "responsividade","formulario", "responsividade", "formulario"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 3696;
        expect(esperado).toBe(retornado);
    });
    
});

describe('pacote premium', () => {

    
});