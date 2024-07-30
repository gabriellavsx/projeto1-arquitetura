// Padrão de projeto Criacional Factory Method
import CidadesHTMLReportAdapter from './CidadesHTMLReportAdapter.js';
import CidadesTXTReportAdapter from './CidadesTXTReportAdapter.js';

export default class ReporterFactory {
  static criarReporter(type) {
    if (type === 'html') {
      return new CidadesHTMLReportAdapter();
    } else if (type === 'txt') {
      return new CidadesTXTReportAdapter();
    } else {
      throw new Error('Esse formato não é válido!');
    }
  }
}
