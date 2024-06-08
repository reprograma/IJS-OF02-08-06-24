const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")
describe("Calcular pacote",()=>{

    test("calcular pacote - pacote basico",()=>{
        const retorno = calcularPacote(30);
        const esperado ="pacote_basico";
        expect(esperado).toBe(retorno)
    });

    test("calcular pacote - pacote intermediario",()=>{
        const retorno = calcularPacote(60);
        const esperado ="pacote_intermediario";
        expect(esperado).toBe(retorno)
    });

    test("calcular pacote - pacote premium",()=>{
        const retorno = calcularPacote(190);
        const esperado ="pacote_premium";
        expect(esperado).toBe(retorno)
    });
})