const { calcularHorasPorProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");


describe('Horas por projeto', () => {
  test('Deve calcular as horas por projeto', () => {
    const listaDeFuncionalidades = ['func1', 'func2', 'func3'];
    const horasPorProjeto = calcularHorasPorProjeto(listaDeFuncionalidades);
    expect(horasPorProjeto).toBe(45); 
  });
});

