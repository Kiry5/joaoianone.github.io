// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0%", "5%", "10%", "15%", "20%", "25%",
        "30%", "35%", "40%", "45%", "50", "55%", "60%",
        "65%", "70%", "75%", "80%", "85%",
        "90%", "95%", "100%"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Roupas', 'Medicamentos', 'Calçados', 'Eletrônicos', 'Alimentos'],
        datasets: [{
            label: 'Vendas %',
            data: [13, 7, 9, 7, 8], // Números originais
            backgroundColor: [
                'rgba(255, 165, 0, 0.2)', // Vermelho
                'rgba(255, 165, 0, 0.2)', // Azul
                'rgba(255, 165, 0, 0.2)', // Amarelo
                'rgba(255, 165, 0, 0.2)', // Verde-água
                'rgba(255, 165, 0, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(255, 165, 0, 1)', // Vermelho
                'rgba(255, 165, 0, 1)', // Azul
                'rgba(255, 165, 0, 1)', // Amarelo
                'rgba(255, 165, 0, 1)', // Verde-água
                'rgba(255, 165, 0, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#FFA500' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFA500' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Produtos',
                    color: '#FFA500'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFA500', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Vendas %',
                    color: '#FFA500'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
