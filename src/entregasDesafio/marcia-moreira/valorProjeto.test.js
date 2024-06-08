const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('pacote basico', () => {
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 900;
        expect(retornado).toBe(esperado);
    });

    test('Calcular valor total do projeto quando 40 horas e 30 reais/hora - simulando mock', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1200;
        expect(esperado).toBe(retornado);
    })
});

describe('pacote intermediario', () => {
    test('calcular valor total do projeto quando 50 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["func1", "func2"]; // 
        pacote.calcularPacote.mockReturnValue('intermediario');
        
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 50 * 30 * 1.2; 
        expect(retornado).toBe(esperado);
    });
});

describe('pacote premium', () => {
    test('calcular valor total do projeto quando 70 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["func1", "func2", "func3"]; 
        
        pacote.calcularPacote.mockReturnValue('premium');
        
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 70 * 30 * 1.3; 
        expect(retornado).toBe(esperado);
    });
});