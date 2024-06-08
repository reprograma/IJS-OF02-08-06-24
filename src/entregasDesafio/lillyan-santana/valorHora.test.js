const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe("calcularValorHora", () => {
    test("deve retornar o valor", () => {
        const rendaMensal = 1412
        const resultado = calcularValorPorHora(rendaMensal)

        expect(resultado).toEqual(9)
    })
})