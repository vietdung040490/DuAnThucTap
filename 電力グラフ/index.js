// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
window.onload = function () {
    // chart 1
    let myChart = document.getElementById('myChart').getContext('2d');
    let myFristChart = new Chart(myChart, {
        type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力',
                '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力',],
            datasets: [{
                label: '電力グラフ',
                data: [],
                backgroundColor: [
                    '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
                    '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
                    '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
                    '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
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
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 0,
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

    setInterval(function () {
        let data = []
        for (let i = 0; i < 23; i++) {
            data[i] = Math.floor(Math.random() * 8000);
        }
        myFristChart.data.datasets[0].data = data;
        myFristChart.update();
    }, 500);

    // chart 2
    // modify data
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            let d = data[0];
            dataset.data.push(d);
            data.shift();
        });
        
        let maxPoints = 24;// số cột
        let removeData = false;
        chart.data.datasets.forEach((dataset) => {
            if (dataset.data.length > maxPoints) {
                if (!removeData) {
                    removeData = true;
                    chart.data.labels.shift();
                }
                dataset.data.shift();
            }
        });
        chart.update();
    }

    let ctx = document.getElementById('myChart2').getContext('2d');
    let myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ["電力"],// đã được thay thế trong hàm addData()
            datasets: [
                { //loại data thứ 1
                    data: [],
                    label: '電力グラフ1',
                    backgroundColor: "rgb(255,99,132, 0.5)",
                    borderColor: "#36a2eb",
                },
                {
                    data: [],
                    label: '電力グラフ2',// label ở bên phải
                    backgroundColor: "",
                    borderColor: "#36a2eb",
                    fill: false,
                    borderColor: "rgba(78, 79, 1, 0.5)",
                    backgroundColor: "rgba(255,10,13,255)",
                    type: 'line',
                    order: 2
                }
                
            ],
        },
        options: {
            title: {// tiêu đề ở trên đầu
                display: true,
                text: '電力グラフ',
                fontSize: 55
            },
            legend: {//label tiêu đề nhỏ, ghi chú loại dữ liệu của từng cột
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {// định dạng vị trí của biểu đồ
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 100
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });
    let index = 0;
    setInterval(function () {
        let data = [];
        let d = new Date();
        let time = d.getHours()+ 'h' + d.getMinutes() + 'p' + d.getSeconds() + 's';

        myChart2.data.datasets.forEach((dataset) => {
            data.push(Math.floor(Math.random() * 8000));
        });
        addData(myChart2, time, data);
        index++;
    }, 300);
}


