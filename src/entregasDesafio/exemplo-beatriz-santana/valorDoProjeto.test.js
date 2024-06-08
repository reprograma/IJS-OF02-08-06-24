const { calcularValorTotalProjeto} = require ("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require ("../../dominio/calculadora/Projeto/pacote")
const { beforeEach } = require("jest-circus")

describe('pacote basico', () => {
    
    beforeEach(() => {
        //para cada teste
        pacote.calcularPacote.mockReturnValue("pacote_basico")

    })

    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"]
        const retornado = calcularValorTotalProjeto[funcionalidade, valorHora]
        const esperado = 1056;
        expect(esperado).toBe(retornado)
    })
})

describe('pacote intermediario', () => {
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora simulando mock', () => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
        const valorHora = 30;
        const funcionalidade = ["formulario", "responsividade"]
        const retornado = calcularValorTotalProjeto[funcionalidade, valorHora]
        const esperado = 1058;
        expect(esperado).toBe(retornado)
    })
})