const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("Calcular Pacote", () => {
  test('calcular pacote básico', () => {
    const horasTrabalhadas = 40; // Simula 40 horas trabalhadas
    const pacoteEsperado = 'pacote_basico';
    const pacoteCalculado = calcularPacote(horasTrabalhadas);
    expect(pacoteCalculado).toBe(pacoteEsperado);
  });

  test('calcular pacote intermediário', () => {
    const horasTrabalhadas = 90; // Simula 90 horas trabalhadas
    const pacoteEsperado = 'pacote_intermediario';
    const pacoteCalculado = calcularPacote(horasTrabalhadas);
    expect(pacoteCalculado).toBe(pacoteEsperado);
  });

  test('calcular pacote premium', () => {
    const horasTrabalhadas = 150; // Simula 150 horas trabalhadas
    const pacoteEsperado = 'pacote_premium';
    const pacoteCalculado = calcularPacote(horasTrabalhadas);
    expect(pacoteCalculado).toBe(pacoteEsperado);
  });
});
