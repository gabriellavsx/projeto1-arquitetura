
import CidadesTXTReport from './src/CidadesTXTReporter.js';

export default class CidadesTXTReportAdapter {
  constructor() {
    this.reporter = new CidadesTXTReport();
  }

  ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse() {
    this.reporter.parse();
  }

  generate() {
    return this.reporter.reportar();
  }
}
