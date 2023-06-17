class ArrayRandomValues<T> {
    private produtos: T[];
  
    constructor(produtos: T[]) {
      this.produtos = produtos;
    }
  
    gerarValorAleatorio(): number {
      return Math.floor(Math.random() * this.produtos.length);
    }
  
    retornarValoresAleatorios(): T[] {
      const valorAleatorio = this.gerarValorAleatorio();
      return [this.produtos[valorAleatorio]];
    }
  }
  
  export default ArrayRandomValues;
  