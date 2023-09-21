 let project_bugs_chart_data = {};
//  var project_xvalues = [] ;
//  var project_yvalues = [] ;
var x_project = [] ;
var y_project = [] ;
var barColors = ["red", "green","blue","orange","brown","purple","pink","yellow","grey","black","red", "green","blue","orange","brown","purple","pink","yellow","grey","black"];

var c =  new Chart("myChart", 
{
        type: 
        "doughnut",
        data:
         {
          labels: x_project,
          datasets: [{
            backgroundColor: barColors,
            data: y_project
          }]
        },
        options:
         {
          title: 
          {
            display: true,
            text: "Project with bugs"
          }
        }
});
