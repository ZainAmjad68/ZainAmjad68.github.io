google.charts.load('current', {
    'packages': ['line', 'corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var chartDiv = document.getElementById('chart_div');

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Semester');
    data.addColumn('number', "Semester GPA");
    data.addColumn('number', "Core CS Subjects GPA");

    data.addRows([
      [1, 3.2, 3.4],
      [2, 3.0, 3.3],
      [3, 3.1, 3.3],
      [4, 3.3, 3.6],
      [5, 3.5, 3.7],
      [6, 3.7, 3.9],
      [7, 3.8, 4],
      [8, 3.5, 3.8],
    ]);

    var classicOptions = {
      title: 'GPA Progression Throughout the Degree',
      subtitle: 'CGPA: 3.34 | Core Subject CGPA: 3.65',
      width: 540,
      height: 300,
      // Gives each series an axis that matches the vAxes number below.
      series: {
        0: {
          targetAxisIndex: 0
        },
        1: {
          targetAxisIndex: 1
        }
      },
      hAxis: {
        ticks: [1, 2, 3, 4, 5, 6, 7, 8],
        title: 'CGPA = 3.34 | Core CS Subjects CGPA = 3.65'
      },
      vAxis: {
        viewWindow: {
          max: 4,
          min: 2.5
        }
      }
    };

    function drawClassicChart() {
      var classicChart = new google.visualization.LineChart(chartDiv);
      classicChart.draw(data, classicOptions);
    }

    drawClassicChart();

  }
