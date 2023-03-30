function updateScores() {
    var kaibichebiScore = localStorage.getItem("first-zero")
    document.getElementById("first-zero").innerHTML = kaibichebiScore;
  }
  updateScores();