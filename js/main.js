        // Donut Graph
        // Get the canvas element
        var canvas = document.getElementById('donutGraph');
    
        // Create the donut chart
        var donutChart = new Chart(canvas, {
          type: 'doughnut',
          data: {
            // labels: ['Blue', 'Green', 'Red', 'Yellow', 'Purple'],
            datasets: [{
              data: [20, 13, 13, 4, 3],
              backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true, // Enable responsiveness
            maintainAspectRatio: false,
            cutout: '50%', // Creates a donut chart
            legend: {
              display: false
            },
            plugins: {
              datalabels: {
                display: true,
                color: '#fff',
                formatter: (value, ctx) => {
                  let sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
                  let percentage = (value * 100 / sum).toFixed(0);
                  return percentage + "%";
                }
              }
            }
          }
        });
      



    //Pie One
        // Get the canvas element
        var canvas = document.getElementById('pieChart');
    
        // Create the pie chart
        var pieChart = new Chart(canvas, {
          type: 'pie',
          data: {
            labels: ['Online', 'Offline'],
            datasets: [{
              data: [8, 2],
              backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'end',
                offset: 10,
                formatter: (value, ctx) => {
                  let label = ctx.chart.data.labels[ctx.dataIndex];
                  return label + ': ' + value + '%';
                }
              }
            }
          }
        });


    // Pie Two
    // Get the canvas element
    var canvas = document.getElementById('pieChart2');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });


    // Pie Three
    // Get the canvas element
    var canvas = document.getElementById('pieChart3');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });



// Pice Four
    // Get the canvas element
    var canvas = document.getElementById('pieChart4');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });




    // Pie Five
    // Get the canvas element
    var canvas = document.getElementById('pieChart5');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });




    //  Pie Six
    // Get the canvas element
    var canvas = document.getElementById('pieChart6');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });





    // Pie Seven
    // Get the canvas element
    var canvas = document.getElementById('pieChart7');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });




    // Pie Eight
    // Get the canvas element
    var canvas = document.getElementById('pieChart8');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });




    // Pie Nine
    // Get the canvas element
    var canvas = document.getElementById('pieChart9');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });



    // Pie 10
    // Get the canvas element
    var canvas = document.getElementById('pieChart10');

    // Create the pie chart
    var pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [{
          data: [8, 2],
          backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + ': ' + value + '%';
            }
          }
        }
      }
    });




    // Pie Eleven
  // Get the canvas element
  var canvas = document.getElementById('pieChart11');

  // Create the pie chart
  var pieChart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['Online', 'Offline'],
      datasets: [{
        data: [8, 2],
        backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'end',
          offset: 10,
          formatter: (value, ctx) => {
            let label = ctx.chart.data.labels[ctx.dataIndex];
            return label + ': ' + value + '%';
          }
        }
      }
    }
  });
   


//  Pie tweleve
  // Get the canvas element
  var canvas = document.getElementById('pieChart12');

  // Create the pie chart
  var pieChart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['Online', 'Offline'],
      datasets: [{
        data: [8, 2],
        backgroundColor: ['rgba(71, 190, 125, 1)', 'rgba(241, 65, 108, 1)'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'end',
          offset: 10,
          formatter: (value, ctx) => {
            let label = ctx.chart.data.labels[ctx.dataIndex];
            return label + ': ' + value + '%';
          }
        }
      }
    }
  });
   
     
      
      
     
    

      
      
      
    