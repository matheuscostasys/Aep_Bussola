// matemagica.test.ts

import Matemagica from './matemagica';

describe('Matemagica', () => {
  describe('adicao', () => {
    test('deve retornar a soma de dois números', () => {
      expect(Matemagica.adicao(2, 3)).toBe(5);
    });
  });

  describe('subtracao', () => {
    test('deve retornar a diferença entre dois números', () => {
      expect(Matemagica.subtracao(5, 3)).toBe(2);
    });
  });

  describe('divisao', () => {
    test('deve retornar a divisão de dois números', () => {
      expect(Matemagica.divisao(10, 2)).toBe(5);
    });

    test('deve lançar um erro ao dividir por zero', () => {
      expect(() => Matemagica.divisao(10, 0)).toThrow(Error);
    });
  });

  describe('multiplicacao', () => {
    test('deve retornar o produto de dois números', () => {
      expect(Matemagica.multiplicacao(2, 3)).toBe(6);
    });
  });
});
