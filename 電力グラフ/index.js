// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = 'black';
window.onload = function () {
    // chart 1
    // let myChart = document.getElementById('myChart').getContext('2d');
    // let myFristChart = new Chart(myChart, {
    //     type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    //     data: {
    //         labels: ['電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力',
    //             '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力', '電力',],
    //         datasets: [{
    //             label: '電力グラフ',
    //             data: [],
    //             backgroundColor: [
    //                 '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
    //                 '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
    //                 '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
    //                 '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384', '#ff6384',
    //             ],
    //             borderWidth: 1,
    //             borderColor: '#777',
    //             hoverBorderWidth: 3,
    //             hoverBorderColor: '#000'
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: '電力グラフ',
    //             fontSize: 55
    //         },
    //         legend: {
    //             display: false,
    //             position: 'right',
    //             labels: {
    //                 fontColor: '#000'
    //             }
    //         },
    //         layout: {
    //             padding: {
    //                 left: 0,
    //                 right: 0,
    //                 bottom: 0,
    //                 top: 0
    //             }
    //         },
    //         tooltips: {
    //             enabled: true
    //         }
    //     }
    // });

    // setInterval(function () {
    //     let data = []
    //     for (let i = 0; i < 23; i++) {
    //         data[i] = Math.floor(Math.random() * 8000);
    //     }
    //     myFristChart.data.datasets[0].data = data;
    //     myFristChart.update();
    // }, 500);

    // chart 2
    

    let ctx = document.getElementById('myChart2').getContext('2d');
    let myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ["電力"],// đã được thay thế trong hàm addData()
            datasets: [
                {//loại data thứ 1
                    data: [],
                    label: '電力グラフ1',// label ở bên phải
                    borderColor: "#36a2eb",
                    fill: false,
                    backgroundColor: "grey",
                    type: 'line',
                    order: 1
                },
                { //loại data thứ 2
                    data: [],
                    label: '電力グラフ2',
                    backgroundColor: "#fd0000",
                    borderColor: "#36a2eb",
                },{ //loại data thứ 3
                    data: [],
                    label: '電力グラフ3',
                    backgroundColor: "#ffff00",
                    borderColor: "#36a2eb",
                },{ //loại data thứ 4
                    data: [],
                    label: '電力グラフ4',
                    backgroundColor: "#70ac47",
                    borderColor: "#36a2eb",
                },
            ],
        },

        options: {
            title: {// tiêu đề ở trên đầu
                display: false,
                text: '電力グラフ',
                fontSize: 55
            },
            scales: {//tracked bar chart, xếp trồng dữ liệu lên 1 cột
                xAxes: [{
                  stacked: true,
                  gridLines: {
                    display: false,
                  }
                }],
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                  },
                  type: 'linear',
                }]
              },
            legend: {//label tiêu đề nhỏ, ghi chú loại dữ liệu của từng cột
                display: true,
                position: 'top',
                labels: {
                    fontColor: 'black'
                }
            },
            layout: {// định dạng vị trí của biểu đồ
                padding: {
                    left: 20,
                    right: 0,
                    bottom: 0,
                    top: 20
                }
            },
            // tooltips: {
            //     enabled: true
            // }
        },
    });

    // modify data
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            let d = data[0];
            dataset.data.push(d);
            data.shift();
        });
        
        let maxPoints = 24;// số cột
        let removeData = false;//
        chart.data.datasets.forEach((dataset) => {
            if (dataset.data.length > maxPoints) {
                if (!removeData) {
                    removeData = true;
                    chart.data.labels.shift();//xóa thông tin phía dưới trục x
                }
                dataset.data.shift();// xóa thông tin cột đầu tiên
            }
        });
        chart.update();
    }

    //render dữ liệu theo thời gian
    setInterval(function () {
        // data truyền vào
        let data = [];
        //get time
        let d = new Date();
        let time = d.getHours()+ 'h' + d.getMinutes() + 'p' + d.getSeconds() + 's';

        //add data and label
        myChart2.data.datasets.forEach((dataset) => {
            data.push(Math.floor(Math.random() * 800));
        });
        // console.log(data)
        addData(myChart2, time, data);
    }, 1000);

}


