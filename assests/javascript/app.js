

var questionGroup ={
    // questionAsia = "What is the largest country in Asia?",
    // questionAsia2 = "Which country is partially located in Europe?",
    // questionEurope = "Name of the mountain range that runs through Europe?",
    // questionEurope2= "Which European city is further south?",
    // questionSouthAm = "How many countries are located in South America?",
    // questionSouthAm2= "What is the largest city in South America?",
    // questionNorthAm = "Name the largest mountain in North America?",
    // questionNorthAm2 = "What is the longest river in North America?",
    // questionAfrica = "What is the total distance from the top of Afica to the bottom?",
    // questionAfica2 = "How many different languages are spoken across Africa?",
}

var correctAnswers = "";
var wrongAnswers= "";


window.onload = function(){
    var timer = 30;
    function clock(){
        timer--;
        $("#timer").text("You have " + timer +" seconds.");
    };
    setInterval(clock, 1000);
    $("#timer").text("You have " + timer +" seconds.");
    $("#questions").text("question");
    $("#answers").text("answers");
}