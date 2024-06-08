const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");


describe("pacote basico", () => {
  test("calcular valor total quando 30 horas e 30 reais/hora ", () => {
    const valorHora = 30;
    const funcionalidades = ["formulario", "responsividade"];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1056;

    expect(esperado).toBe(retornado);
  });
});

describe("pacote intermediario", () => {
  test("calcular valor total quando 48 horas e 30 reais/hora", () => {
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
  test("calcular valor total quando 90 horas e 30 reais/hora", () => {
    const valorHora = 30;
    const funcionalidades = [
      "formulario",
      "responsividade",
      "construcao_1_pagina",
      "construcao_2_pagina",
      "construcao_3_pagina",
      "construcao_4_pagina",
    ];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1980;

    expect(esperado).toBe(retornado);
  });
});
