let people_issues_chart_data = {};
// var x_values_for_people = [];
// var y_values_for_people = [];
var x_people = [];
var y_people = [];
var barColors = ["red", "green","blue","orange","brown","purple","pink","yellow","grey","black","red", "green","blue","orange","brown","purple","pink","yellow","grey","black"];

var people_chart = new Chart("people_issues", {
  type: "bar",
  data: {
    labels: x_people,
    datasets: [{
      backgroundColor: barColors,
      data: y_people
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "People who have to fix number of bugs"
    }
  }
});