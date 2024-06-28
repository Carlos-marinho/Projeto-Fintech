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
                '#BDAA00',
                '#9C5353',
                '#299D91'
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
                data: [300, 50, 100],
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
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
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 5},

              {label: 'Despesas',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 5
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
        });

        new Chart(graficoDespesasCat,{
            type: 'doughnut',
            data: data_grafico_pizza_despesas,
        });
