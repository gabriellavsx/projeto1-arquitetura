// Padrão de projeto Comportamental Strategy
export default class ReportGenerator {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    generateReport(caminho) {
      this.strategy.read(caminho);
      this.strategy.parse();
      return this.strategy.generate();
    }
  }
  