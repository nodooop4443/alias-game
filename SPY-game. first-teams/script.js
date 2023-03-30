
  // Retrieve and update the scores in localStorage
  function updateScores() {
    var kurdebiScore = localStorage.getItem("kurdebi-score")
    document.getElementById("kurdebi-score").innerHTML = kurdebiScore;
  }
  updateScores();

  var getEqual = localStorage.getItem("equals")
  document.getElementById("any-equals-score").innerHTML = getEqual


// get the score from localStorage
var score = localStorage.getItem("score");

// update the HTML element with the retrieved score
document.getElementById("any-equals-score").innerHTML = score;
