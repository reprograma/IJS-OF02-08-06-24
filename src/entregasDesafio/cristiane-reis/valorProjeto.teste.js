const {calcularValorTotalPojeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('pacote basico', () => {
    beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
    });
    
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalPojeto(funcionalidades, valorHora);
        const esperado = 1056
        expect(esperado).toBe(retornado);
    });
    test('calcular valor total do projeto quando 30 hora e 30 reais/hora - simulando mock', () =>{
    pacote.calcularPacote.mockReturnValue("pacote_basico");
    const funcionalidades = ["formulario", "responsividade"];
    const retornado = calcularValorTotalPojeto(funcionalidades, valorHora);
    const esperado = 1056
    expect(esperado).toBe(retornado);

    })
});

describe('pacote intermediário', () => {
    test('calcular valor total do projeto quando 100 horas e 30 reais/hora', () => {
        const valorHora = 60;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 2016; 
        expect(retornado).toBe(esperado);
    });

    test('calcular valor total do projeto quando 100 horas e 30 reais/hora - simulando mock', () => {
        pacote.calcularPacote = jest.fn().mockReturnValue("pacote_intermediario");
        const valorHora = 100;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 3450; 
        expect(retornado).toBe(esperado);
    });
});

describe('pacote premium', () => {
    test('calcular valor total do projeto quando 200 horas e 30 reais/hora', () => {
        const valorHora = 110;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 6900;
        expect(retornado).toBe(esperado);
});
test('calcular valor total do projeto quando 200 horas e 30 reais/hora - simulando mock', () => {
    pacote.calcularPacote = jest.fn().mockReturnValue("pacote_premium");
    const valorHora = 30;
    const funcionalidades = ["formulario", "responsividade",];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 6900; 
    expect(retornado).toBe(esperado);
    });
});