const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular valor do pacote", () => {

    test("Calcular pacote basico quando 23h", () => {
        const retorno = calcularPacote(50);
        const esperado = 'pacote_basico'
        expect(esperado).toBe(retorno)
    })

    test("Calcular pacote intermediario quando 100h", () => {
        const retorno = calcularPacote(100);
        const esperado = 'pacote_intermediario'
        expect(esperado).toBe(retorno)
    })

    test("Calcular pacote premium quando 200", () => {
        const retorno = calcularPacote(200);
        const esperado = 'pacote_premium'
        expect(esperado).toBe(retorno)
    })


});