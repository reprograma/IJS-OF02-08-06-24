const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');


describe("Calcular pacote", () => {
    const retornado = calcularPacote(23);
    const esperado = 'pacote_basico';
    expect(esperado).toBe(retornado);
})

// criando o test