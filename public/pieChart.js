var PieChart = function(type, text, name, data, categories){
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({
    chart: {
          type: type,
          renderTo: container
        },

        title: {
          text: text
        },

        series: [{
          name: name,
          data: data
        }],

        xAxis: {
          categories: categories
        }
      });
}

