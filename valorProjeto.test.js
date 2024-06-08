const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto'); // Corrija o caminho se necessário
const pacote = require('../../dominio/calculadora/Projeto/pacote');

// Mock do módulo 'pacote'
jest.mock('../../dominio/calculadora/Projeto/pacote');

describe("Calcular valor total do projeto", () => {
  // Dados de entrada para os testes
  const horas = 30;
  const valorHora = 30;

  test("deve calcular o valor total para o pacote básico", () => {
    const tipoPacote = 'basico';
    const resultadoEsperado = horas * valorHora * 1.1;
    const resultadoCalculado = calcularValorTotalProjeto(horas, valorHora, tipoPacote);
    expect(resultadoCalculado).toBe(resultadoEsperado);
  });

  test("deve calcular o valor total para o pacote intermediário", () => {
    const tipoPacote = 'intermediario';
    const resultadoEsperado = horas * valorHora * 1.2;
    const resultadoCalculado = calcularValorTotalProjeto(horas, valorHora, tipoPacote);
    expect(resultadoCalculado).toBe(resultadoEsperado);
  });

  test("deve calcular o valor total para o pacote premium", () => {
    const tipoPacote = 'premium';
    const resultadoEsperado = horas * valorHora * 1.3;
    const resultadoCalculado = calcularValorTotalProjeto(horas, valorHora, tipoPacote);
    expect(resultadoCalculado).toBe(resultadoEsperado);
  });
});
