const ctx = document.getElementById("myChart").getContext('2d');
const number = document.getElementById("number");
const color = document.getElementById("color");

const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Purple", "Yellow", "Red"],
    datasets: [{
      backgroundColor: [
        "green",
        "blue",
        "purple",
        "yellow",
        "red",
      ],
      data: [20, 20, 20, 20, 20],
      borderColor: "black"
    }]
},
  options: {
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    }
  }
});

function changeChart() {
  chosenColor = color.value;
  chosenNumber = parseInt(number.value);
  if (chosenNumber > 100 || chosenNumber < 0) {
    return;
  }
  const index = myChart.data.labels.indexOf(chosenColor);
  myChart.data.datasets[0].data[index] = chosenNumber;
  myChart.update();
}


number.addEventListener("input", changeChart)
color.addEventListener("input", changeChart)