// Our labels along the x-axis
var years = [1990,1995,2000,2005, 2007,2010,2017];
// For drawing the lines
var Other = [1.5, 2.8, 4.1, 4.8, 5.3, 5.2, 5.5];
var Mexican = [2.0, 2.9, 4.5, 6.3, 6.9, 6.2, 4.9];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: Other,
        label: "Other",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: Mexican,
        label: "Mexican",
        borderColor: "#8e5ea2",
        fill: false
      },

    ]
  }
});



