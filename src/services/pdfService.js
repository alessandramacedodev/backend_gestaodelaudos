const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.gerarLaudoPDF = (dadosLaudo, caminhoArquivo) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(caminhoArquivo);
    doc.pipe(stream);

    doc.fontSize(18).text('Laudo Pericial', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Número: ${dadosLaudo.numero}`);
    doc.text(`Título: ${dadosLaudo.titulo}`);
    doc.text(`Data: ${dadosLaudo.data}`);
    doc.moveDown();
    doc.text('Conteúdo:');
    doc.text(dadosLaudo.conteudo);

    doc.end();

    stream.on('finish', () => {
      resolve();
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
};
