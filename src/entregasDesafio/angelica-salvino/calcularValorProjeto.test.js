const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');  

describe('pacote basico', () => {
    test('calcular valor total do projeto quando 23 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        pacote.calcularPacote.mockReturnValue("pacote_basico");  
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;  
        expect(esperado).toBe(retornado);
    });

    test('calcular valor total do projeto quando 23 horas e 30 reais/hora - simulando mock', () => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });
});

describe('pacote intermediario', () => {
    test('calcular valor total do projeto quando 60 horas e 100 reais/hora', () => {
        const valorHora = 100;
        const funcionalidades = ["formulario", "responsividade", "integracao_mailchimp"];
        pacote.calcularPacote.mockReturnValue("pacote_intermediario");  
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 5376;  
        expect(esperado).toBe(retornado);
    });

    test('calcular valor total do projeto quando 60 horas e 100 reais/hora - simulando mock', () => {
        pacote.calcularPacote.mockReturnValue("pacote_intermediario");
        const valorHora = 100;
        const funcionalidades = ["formulario", "responsividade", "integracao_mailchimp"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 5376;
        expect(esperado).toBe(retornado);
    });
});

describe('pacote premium', () => {
    test('calcular valor total do projeto quando 150 horas e 200 reais/hora', () => {
        const valorHora = 200;
        const funcionalidades = ["formulario", "responsividade", "integracao_mailchimp", "otimizacao_seo", "integracao_api_propria"];
        pacote.calcularPacote.mockReturnValue("pacote_premium");  
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 18400;  
        expect(esperado).toBe(retornado);
    });

    test('calcular valor total do projeto quando 150 horas e 200 reais/hora - simulando mock', () => {
        pacote.calcularPacote.mockReturnValue("pacote_premium");
        const valorHora = 200;
        const funcionalidades = ["formulario", "responsividade", "integracao_mailchimp", "otimizacao_seo", "integracao_api_propria"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 18400;
        expect(esperado).toBe(retornado);
    });
});

