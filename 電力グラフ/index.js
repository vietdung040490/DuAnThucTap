let myChart = document.getElementById('myChart').getContext('2d');
// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let myFristChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['電力','電力','電力','電力','電力','電力','電力','電力','電力','電力',
        '電力','電力','電力','電力','電力','電力','電力','電力','電力','電力','電力','電力','電力',],
        datasets: [{
            label: '電力グラフ',
            data: [
                1, 2, 3, 4, 5, 4,
                1, 2, 3, 4, 5, 4,
                1, 2, 3, 4, 5, 4,
                1, 2, 3, 4, 5, 4,
            ],
            backgroundColor: [
                'red', 'red', 'red', 'red', 'red', 'red',
                'red', 'red', 'red', 'red', 'red', 'red',
                'red', 'red', 'red', 'red', 'red', 'red',
                'red', 'red', 'red', 'red', 'red', 'red',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: '電力グラフ',
            fontSize: 55
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});


setInterval(function() {
    let data = []
    for (let i = 0; i < 23; i++) {
        data[i] = Math.floor(Math.random() * 8000);
    }
    myFristChart.data.datasets[0].data = data
    myFristChart.update();
}, 1000);
