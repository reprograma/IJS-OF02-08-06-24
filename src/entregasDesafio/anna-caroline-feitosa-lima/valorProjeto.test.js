const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote")/

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('pacote básico', () => {
    beforeEach(() => {
        pacote.calcularValorTotalProjeto.mockReturnValue("pacote_basico");
    });
    
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        pacote.calcularValorTotalProjeto.mockReturnValue("pacote_basico");
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidade, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        pacote.calcularValorTotalProjeto.mockReturnValue("pacote_basico");
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidade, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });

})