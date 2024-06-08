const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('pacote basico', () => {
    beforeEach(() => {  
        pacote.calcularPacote.mockClear();
    });

    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ['setup', 'formulario', 'responsividade'];
        pacote.calcularPacote.mockReturnValue('pacote_basico');

        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        
        const totalDeHoras = 8 + 16 + 16; 
        const esperado = Math.round(totalDeHoras * valorHora * 1.1); 

        expect(retornado).toBe(esperado);  
    });
});
