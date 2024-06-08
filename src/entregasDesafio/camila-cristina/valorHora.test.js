const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('Calcular valor da hora', () => {

  test("Deve emitir um erro caso a função não receba uma string como parametro", () => {
    
    expect(() => calcularValorPorHora('string')).toThrow()
  })

  test("Deve emitir um erro caso a função não receba o parametro renda mensal", () => {
    
    expect(() => calcularValorPorHora()).toThrow('valor mensal dever ser um numero');
  })

  test("Deve emitir um erro caso renda mensal seja negativa", () => {
    expect(() => calcularValorPorHora(-1)).toThrow('valor mensal deve ser maior que zero');
  })

  test("Calcular valor da hora - renda mensal 0", () => {
    const retorno = calcularValorPorHora(0);
    const esperado = 0;
  
    expect(retorno).toBe(esperado);
  })

  test("Calcular valor da hora - renda mensal 3000 mil", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 18;
  
    expect(retorno).toBe(esperado);
  })

  test("Calcular valor da hora - renda mensal 4000 mil", () => {
    const retorno = calcularValorPorHora(4000);
    const esperado = 23;
  
    expect(retorno).toBe(esperado);
  })
  
  test("Calcular valor da hora - renda mensal 15000 mil ", () => {
    const retorno = calcularValorPorHora(15000);
    const esperado = 86;
  
    expect(retorno).toBe(esperado);
  })
})

