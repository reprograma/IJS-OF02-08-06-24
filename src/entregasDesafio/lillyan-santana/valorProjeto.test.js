const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const moduloPacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock("../../dominio/calculadora/Projeto/pacote")

describe("valorProjeto", () => {
    beforeEach(() => {
        moduloPacote.calcularPacote.mockReturnValue('pacote_basico');
        });

    test("retornar valor total do projeto", () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
          ];

          const valorHora = 70

          const result = calcularValorTotalProjeto(funcionalidades, valorHora)

          expect(result).toEqual(3696)
    })

})