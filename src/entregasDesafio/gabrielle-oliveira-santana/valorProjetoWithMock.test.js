const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("pacote basico", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("calcular valor total do projeto quando 30 horas e 30 reais/hora - simulando mock", () => {
    const valorHora = 30;
    const funcionalidades = ["formulario", "responsividade"];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1056;

    expect(esperado).toBe(retornado);
  });
});

// TODO - usar o mock para simular o retorno do pacote intermediario
describe("pacote intermediario", () => {
  test("calcular valor total do projeto quando 48 horas e 30 reais/hora", () => {
    const valorHora = 30;
    const funcionalidades = [
      "formulario",
      "responsividade",
      "construcao_1_pagina",
    ];
    const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1320;
    expect(retorno).toBe(esperado);
  });
});

describe("pacote premium", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
  });

  test("calcular valor total do projeto quando 150 horas e 30 reais/hora - simulando mock", () => {
    const valorHora = 30;
    const funcionalidades = [
      "formulario",
      "responsividade",
      "construcao_1_pagina",
      "construcao_2_pagina",
      "construcao_3_pagina",
    ];

    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 3375; 

    expect(esperado).toBe(retornado);
  });
});

