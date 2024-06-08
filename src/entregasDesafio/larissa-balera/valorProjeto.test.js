const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")

describe("pacote _basico", () => {
    test("Calcular valor total do projeto quando 30h e 30 reais/h", () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"]
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado)

    })
});

describe("pacote_intermediario", () => {
    test("Calcular valor total do projeto quando 64 e 50 reais/h", () => {
        const valorHora = 50;
        const funcionalidades = ["formulario", "responsividade", "otimizacao_seo",, "integracao_mailchimp"]
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 3584;
        expect(esperado).toBe(retornado)

    })
});

describe("pacote_premium", () => {
    test("Calcular valor total do projeto quando 104h e 60 reais/h", () => {
        const valorHora = 60;
        const funcionalidades = ["formulario", "responsividade", "construcao_1_pagina", "construcao_1_pagina", "construcao_1_pagina", "construcao_1_pagina", "construcao_1_pagina", "integracao_mailchimp" , "integracao_api_propria"]
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 4301;
        expect(esperado).toBe(retornado)

    })
});