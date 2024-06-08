const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  
 test('pacote básico para até 50h de trabalho', () => {
        const horas = calcularPacote(23);
        const pacoteEsperado = 'pacote_basico';
    
        expect(horas).toBe(pacoteEsperado);
 }); 
  test('para até 200h de trabalho', () => {
    const horas = 200;
    const pacoteEsperado = 'pacote_premium';

    expect(calcularPacote(horas)).toBe(pacoteEsperado);
  });

  test('para mais de 200h de trabalho', () => {
    const horas = 250;
    const pacoteEsperado = 'pacote_premium';

    expect(calcularPacote(horas)).toBe(pacoteEsperado);
  });

  test('para menos de 50h de trabalho', () => {
    const horas = 49;
    const pacoteEsperado = 'pacote_basico';

    expect(calcularPacote(horas)).toBe(pacoteEsperado);
  });

  test('entre 51 e 100h de trabalho', () => {
    const horas = 75;
    const pacoteEsperado = 'pacote_intermediario';

    expect(calcularPacote(horas)).toBe(pacoteEsperado);
  });

  test('entre 101 e 200h de trabalho', () => {
    const horas = 150;
    const pacoteEsperado = 'pacote_premium';

    expect(calcularPacote(horas)).toBe(pacoteEsperado);
  });

});


