const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calular pacote', () => {
  test('Calcular pacote basico quando 23 horas', () => {
    const retornado = calcularPacote(23)
    const esperado = 'pacote_basico'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 50 horas', () => {
    const retornado = calcularPacote(50)
    const esperado = 'pacote_basico'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 51 horas', () => {
    const retornado = calcularPacote(51)
    const esperado = 'pacote_intermediario'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 100 horas', () => {
    const retornado = calcularPacote(100)
    const esperado = 'pacote_intermediario'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 101 horas', () => {
    const retornado = calcularPacote(101)
    const esperado = 'pacote_premium'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 200 horas', () => {
    const retornado = calcularPacote(200)
    const esperado = 'pacote_premium'

    expect(esperado).toBe(retornado)
  })

  test('Calcular pacote basico quando 201 horas', () => {
    expect(() => calcularPacote(201)).toThrow('Valor enviado é maior que o máximo permitido')
  })
})