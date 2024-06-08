const {calcularValorPorHora} = require ('../../dominio/calcular/Hora/valorHora');

describe("Calcular valor da hora", () =>{
test("calcular valor da hora - renda mensal 3000", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 10;
    expect(esperado).toBe(retorno);
    });
    
});