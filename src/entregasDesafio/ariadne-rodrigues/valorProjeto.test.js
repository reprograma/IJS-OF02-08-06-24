const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/Pacote');

jest.mock('../../dominio/calculadora/Projeto/Pacote');


describe("pacote basico", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    });
    
    test("Calcular valor do projeto com 30 horas e 30 reais por hora", () => {
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidade, valorHora);
        const esperado = 1056; 
        expect(esperado).toBe(retornado);
    });

    test("Calcular valor do projeto com 30 horas e 30 reais por hora - simulando mock", () => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidade, valorHora);
        const esperado = 1056; 
        expect(esperado).toBe(retornado);
    });
});
