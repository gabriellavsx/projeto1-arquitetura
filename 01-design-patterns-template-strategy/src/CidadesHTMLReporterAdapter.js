// Padrão de projeto Estrutural Adapter
import CidadesHTMLReport from './src/CidadesHTMLReporter.js';

export default class CidadesHTMLReportAdapter {
  constructor() {
    this.reporter = new CidadesHTMLReport();
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
