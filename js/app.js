const graficoBarraRecDesp = document.getElementById('graficoReceitasDespesas');
        const graficoReceitasCat = document.getElementById('graficoReceitasCat');
        const graficoDespesasCat = document.getElementById('graficoDespesasCat');

        const data_grafico_pizza_receitas = {
            labels: [
                'Salário',
                'Freelancer',
                'Extras'
            ],
            datasets: [{
                label: 'Receitas por Categoria',
                data: [10000,3000,2000],
                backgroundColor: [
                '#E3CF1B',
                '#B72D2D',
                '#229A52'
                ],
                hoverOffset: 3
            }]
            };

        const data_grafico_pizza_despesas = {
            labels: [
                'Mercado',
                'Contas Fixas',
                'Cartão de Crédito',
                'Outros'
            ],
            datasets: [{
                label: 'Despesas por Categoria',
                data: [5000, 2000, 2000, 1000],
                backgroundColor: [
                '#B72D2D',
                'rgb(54, 162, 235)',
                '#E3CF1B',
                '#229A52'
                ],
                hoverOffset: 4
            }]
            };
        

        new Chart(graficoBarraRecDesp, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
              label: 'Receitas',
              data: [12000, 9000, 7000, 5000, 6000, 8000],
              borderWidth: 5,
              backgroundColor: '#229A52'
            },

              {label: 'Despesas',
              data: [9000, 8000, 6900, 4500, 3000, 6000],
              borderWidth: 5,
              backgroundColor: '#B72D2D'
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });


        new Chart(graficoReceitasCat,{
            type: 'doughnut',
            data: data_grafico_pizza_receitas,
            options: {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });

        new Chart(graficoDespesasCat,{
            type: 'doughnut',
            data: data_grafico_pizza_despesas,
            options: {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
