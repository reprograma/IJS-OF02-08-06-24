const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote básico', () => {
    test('deve retornar "pacote basico" para um total de 40 horas', () => {
        const totalDeHorasPorProjeto = 40;
        const pacoteEsperado = 'pacote_basico';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });

    test('deve retornar "pacote basico" para um total de 50 horas', () => {
        const totalDeHorasPorProjeto = 50;
        const pacoteEsperado = 'pacote_basico';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });
});

describe('Calcular pacote intermediario', () => {
    test('deve retornar "pacote intermediario" para um total de 75 horas', () => {
        const totalDeHorasPorProjeto = 75;
        const pacoteEsperado = 'pacote_intermediario';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });

    test('deve retornar "pacote intermediario" para um total de 100 horas', () => {
        const totalDeHorasPorProjeto = 100;
        const pacoteEsperado = 'pacote_intermediario';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });

});

describe('Calcular pacote premium', () => {
    test('deve retornar "pacote premium" para um total de 150 horas.', () => {
        const totalDeHorasPorProjeto = 150;
        const pacoteEsperado = 'pacote_premium';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });

    test('deve retornar "pacote premium" para um total de 200 horas', () => {
        const totalDeHorasPorProjeto = 200;
        const pacoteEsperado = 'pacote_premium';
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);

        expect(pacoteCalculado).toBe(pacoteEsperado);
    });
});

describe('Calcular pacote quando excedem o limite de horas', () => {
    test('Deve retornar undefined para um total de horas acima do limite máximo', () => {
        const totalDeHorasPorProjeto = 250;
        const pacoteEsperado = undefined;
        
        const pacoteCalculado = calcularPacote(totalDeHorasPorProjeto);
    
        expect(pacoteCalculado).toBe(pacoteEsperado);
      });
    
      test('Deve retornar undefined para um total de horas negativo ou zero', () => {
        let pacoteCalculado = calcularPacote(-10);
        expect(pacoteCalculado).toBe(undefined);

        pacoteCalculado = calcularPacote(0);
        expect(pacoteCalculado).toBe(undefined);

      });
});
