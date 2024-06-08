const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe("pacote", () => {
    beforeEach(() => {
        calcularPacote.calcularPacote.mockReturnValue("pacote_basico");

        test("deve retornar pacote pacote_basico quando o totalHorasPorProjeto for menor que 50", () => {
            const totalHorasProProjeto = 49
    
            const result= calcularPacote(totalHorasProProjeto)
    
            expect(result).toEqual("pacote_basico")
        })
    
        test("deve retornar pacote pacote_basico quando o totalHorasPorProjeto seja igual a 50 - 2", () => {
            const totalHorasProProjeto = 50
    
            const result= calcularPacote(totalHorasProProjeto)
    
            expect(result).toEqual("pacote_basico")
        })
    
        test("deve retornar pacote pacote_basico quando o totalHorasPorProjeto seja maior que 50 - 3 ", () => {
            const totalHorasProProjeto = 65
    
            const result= calcularPacote(totalHorasProProjeto)
    
            expect(result).toEqual("pacote_intermediario")
        })
    
        test("deve retornar pacote pacote_basico quando o totalHorasPorProjeto seja maior que 100 - 4", () => {
            const totalHorasProProjeto = 190
    
            const result= calcularPacote(totalHorasProProjeto)
    
            expect(result).toEqual("pacote_premium")
        })
    });


});
    