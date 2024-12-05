// Dados para os gráficos
const labels = ['13-18', '19-25'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Horas Diárias',
      data: [4, 3],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }
  ]
};

const pieData = {
  labels: ['Instagram', 'TikTok'],
  datasets: [
    {
      data: [1, 1],
      backgroundColor: ['#FF6384', '#36A2EB']
    }
  ]
};

// Gráfico de Barras
const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});

// Gráfico de Pizza
const pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: pieData,
  options: {
    responsive: true
  }
});