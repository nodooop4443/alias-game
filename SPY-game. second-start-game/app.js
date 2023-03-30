var timeLeft = 2;
var timerId = setInterval(countdown, 1000);

function countdown() {
  timeLeft--;
  document.getElementById("timer").innerHTML = timeLeft;
  if (timeLeft == 0) {
    clearInterval(timerId);
    // timer has ended


    var scoreText1 = document.getElementById("score").innerHTML;
    localStorage.setItem("first-zero", scoreText1);
    window.location.href = "../SPY-game. second-teams/index.html";


    

  }
}

const words = ["ლამაზი", "ყვავილი", "სურათი", "მაწონი", "დებილი", "ფეხბურთელი", "ღამის კლუბი", "მამინაცვალი", "ბარი", "გადამზიდი", "კუბი", "ტორტი", "ღილი", "შვრია", "ბალანსი", "მოცეკვავე", "სუში", "ხელმწიფე", "კუზი", "სათვალეები", "ხორთუმი", "წრეწირი", "ენერგია", "პეიზაჟი", "ტრაქტორისტი", "ბალი", "ალუჩა", "სიმწიფე", "იოგი", "ნაოჭი", "საზამთრო", "ორი", "ტერარიუმი", "სირცხვილი", "ხვლიკი", "ასტროლოგია", "ხედი", "სტარტი" ]

let counterValue = 0;
let secondCounterValue = 0;

function goodJob() {
    const randomWords = Math.floor(Math.random() * words.length);
    const getRandmWord =  words[randomWords];
    document.getElementById("my-label").innerText = getRandmWord
   
    counterValue++;
    document.getElementById("score").innerText = counterValue;

    
    
  
 



   

}

function dumb() {
  const randomWords = Math.floor(Math.random() * words.length);
    const getRandmWord =  words[randomWords];
    document.getElementById("my-label").innerText = getRandmWord

  counterValue--;
  document.getElementById("score").innerText = counterValue;

}










