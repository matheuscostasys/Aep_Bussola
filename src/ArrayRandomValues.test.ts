import ArrayRandomValues from './ArrayRandomValues';

describe('ArrayRandomValues', () => {
  describe('retornarValoresAleatorios', () => {
    test('deve retornar o valor armazenado em um índice aleatório', () => {
      const array = new ArrayRandomValues<number>([1, 2, 3, 4, 5]);
      const valores = array.retornarValoresAleatorios();
      expect(valores.length).toBe(1);
      expect(valores[0]).toBeGreaterThanOrEqual(1);
      expect(valores[0]).toBeLessThanOrEqual(5);
    });
  });
});
