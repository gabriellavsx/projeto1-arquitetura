import CidadesHTMLReport from './src/CidadesHTMLReporter.js';
import CidadesTXTReport from './src/CidadesTXTReporter.js';


// Factory Method
class ReporterFactory {
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

// Adapters
class CidadesHTMLReportAdapter {
  constructor() {
    this.reporter = new CidadesHTMLReport();
  }

  read(caminho) {
    this.reporter.ler(caminho);
  }

  parse() {
    this.reporter.parse();
  }

  generate() {
    return this.reporter.reportar();
  }
}

class CidadesTXTReportAdapter {
  constructor() {
    this.reporter = new CidadesTXTReport();
  }

  read(caminho) {
    this.reporter.ler(caminho);
  }

  parse() {
    this.reporter.parse();
  }

  generate() {
    return this.reporter.reportar();
  }
}

// Strategy
class ReportGenerator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  generateReport(caminho) {
    this.strategy.read(caminho);
    this.strategy.parse();
    return this.strategy.generate();
  }
}

// Código principal
const [cmd, filename, format] = process.argv;

try {
  const reporter = ReporterFactory.createReporter(format);
  const reportGenerator = new ReportGenerator(reporter);
  const report = reportGenerator.generateReport('./data/cidades-2.json');
  console.log(report);
} catch (error) {
  console.error(error.message);
}




/*const [cmd, filename, format] = process.argv;


if (format === 'html') {
  let reporter = new CidadesHTMLReport();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
if (format === 'txt') {
  let reporter = new CidadesTXTReport();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}*/
