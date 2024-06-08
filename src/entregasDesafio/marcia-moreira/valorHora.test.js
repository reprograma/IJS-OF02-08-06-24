// Importar a Função a ser testada:
const { calcularValorPorHora } = require('../../dominio/calculadora')

// Valor de Entrada:

describe("Calcular valor da hora", () => {

    test("Calcular valor da hora - renda mensal 3000" , () => {
        const retorno = calcularValorPorHora(3000);
        const esperado = 18;
        expect(esperado).toBe(retorno);
    })

    test("Calcular valor da hora - renda mensal 4000" , () => {
        const retorno = calcularValorPorHora(4000);
        const esperado = 23;
        expect(esperado).toBe(retorno);
    })

    test("Calcular valor da hora - renda mensal 15000" , () => {
        const retorno = calcularValorPorHora(3000);
        const esperado = 86;
        expect(esperado).toBe(retorno);
    })

});





// comando:
// npm test

// Quais são as funções desse site: formulario, responsivo, pagamento, calcular algo...