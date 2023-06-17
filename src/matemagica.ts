// matemagica.ts

class Matemagica {
    static adicao(a: number, b: number): number {
      return a + b;
    }
  
    static subtracao(a: number, b: number): number {
      return a - b;
    }
  
    static divisao(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Divisão por zero não é permitida!");
      }
      return a / b;
    }
  
    static multiplicacao(a: number, b: number): number {
      return a * b;
    }
  }
  
  export default Matemagica;
  