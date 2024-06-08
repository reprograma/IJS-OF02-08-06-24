const pacote = require('../../dominio/calculadora/Projeto/pacote');

var testeGenerico = (quantidadeHoras, tipoPacoteEsperado, stringTeste) => {
    test(stringTeste, () => {
        const calculo = pacote.calcularPacote(quantidadeHoras);
        expect(calculo).toBe(tipoPacoteEsperado);
    });
};

describe("Calcula pacote", () => {
  testeGenerico(
    23,
    'pacote_basico',
    'Calcular pacote básico quando 23 horas'
  );
  testeGenerico(
    53,
    'pacote_intermediario',
    'Calcular pacote intermediário quando 53 horas'
  );
  testeGenerico(
    199,
    'pacote_premium',
    'Calcular pacote premium quando 199 horas'
  );
  testeGenerico(
    100,
    'pacote_intermediario',
    'Calcular pacote intermediario quando 100 horas'
  );
  testeGenerico(
    50,
    'pacote_basico',
    'Calcular pacote basico quando 50 horas'
  );
})
