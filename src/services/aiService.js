const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const largura = 800;
const altura = 600;
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: largura, height: altura });

exports.gerarGrafico = async (tipo, dados) => {
  let configuracao;

  switch (tipo) {
    case 'pizza':
      configuracao = {
        type: 'pie',
        data: {
          labels: dados.labels,
          datasets: [
            {
              data: dados.valores,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
      };
      break;
    case 'linha':
      configuracao = {
        type: 'line',
        data: {
          labels: dados.labels,
          datasets: [
            {
              label: 'Laudos por Mês',
              data: dados.valores,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
      };
      break;
    case 'piramide':
      // Implementação de gráfico de pirâmide conforme necessário
      break;
    default:
      throw new Error('Tipo de gráfico não suportado');
  }

  const imagem = await chartJSNodeCanvas.renderToBuffer(configuracao);
  return imagem;
};
