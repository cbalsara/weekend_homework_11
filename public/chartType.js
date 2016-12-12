var ChartType = function(type, text, name, data, categories){
  var container = document.getElementById('type-of-chart');
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

