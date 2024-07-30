import CidadesHTMLReport from './CidadesHTMLReporter.js';
import CidadesTXTReport from './src/CidadesTXTReporter.js';



// Código principal
const [cmd, filename, format] = process.argv;

try {
  const reporter = ReporterFactory.criarReporter(format);
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
