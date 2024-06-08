const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe('pacote basico', () => {
    beforeAll(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });

    test('calcular valor total do projeto quando 30 horas e 30 reais/hora - simulando mock', () => {
        // pacote.calcularPacote.mockReturnValue("pacote_basico")
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });


    
})