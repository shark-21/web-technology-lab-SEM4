
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawBarChart);
function drawChart(){

    var data = google.visualization.arrayToDataTable([
        ['Runs' ,'Games Played'],
        [30,2],[60,8],[70,8],[80,9],[90,9],[100,9],
        [110,10],[120,11],[130,14],[140,14],[150,15]
    ]);


var options = {
    title: 'Runs vs Games',
    hAxis: {title: 'Games Played'},
    vAxis: {title: 'Runs Scored'},
    legend: 'none'
};

 var chart = new google.visualization.LineChart(document.getElementById('myChart'));
 var chartsc = new google.visualization.ScatterChart(document.getElementById('myscChart'));
chart.draw(data, options);
chartsc.draw(data, options);

}

function drawBarChart() {

    var data = google.visualization.arrayToDataTable([
      ['IPL_TEAM', "no. of 6's"],
      ['CSK', 55],
      ['RCB', 49],
      ['GT', 44],
      ['MI', 24],
      ['SRH', 15]
    ]);
    
    var options = {
      title: 'Sixes hit by ipl teams',
      is3D: true
    };
    
    var bchart = new google.visualization.BarChart(document.getElementById('bar'));
    bchart.draw(data, options);
    var pie = new google.visualization.PieChart(document.getElementById('pie'));
    pie.draw(data, options);    
}