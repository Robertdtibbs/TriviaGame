
var questionGroup =[
    {
        question: "What is the largest country in Asia?",
        answerList: ["China", "India", "Japan", "Thailand",],
        answer: 0,
        answerText: "China",
        image: src = "assests/images/china.jpg",
    
    },
    {
        question: "Which country is partially located in Europe?",
        answerList: ["Cambodia", "India", "Russia", "Vietnam",],
        answer: 2,
        answerText: "Russia",
        image: "assests/images/Russia_Moscow.jpg",
    },
    {
        question: "Name of the mountain range that runs through Europe?",   
        answerList: ["Andes", "Rocky", "Appalachain", "Alps",],
        answer: 3,
        answerText: "Alps",
        image: "assests/images/alps.jpg",
    
    },
    {
        question: "Which European city is further south?",
        answerList: ["Paris", "Geneva", "Oslo", "Rome",],
        answer: 3,
        answerText: "Rome",
        image: "assests/images/colisee-rome.jpg",
    
    },
    {
        question: "How many countries are located in South America?",
        answerList: ["12", "14", "8", "11",],
        answer: 0,
        answerText: "12",
        image: "assests/images/southamerica.jpg",
    
    },
    {
        question: "What is the largest county in South America?",
        answerList: ["Chile", "Argentina", "Brazil", "Columbia",],
        answer: 2,
        answerText: "Brazil",
        image: "assests/images/Rio.jpg",
    
    },
    {
        question: "Name the largest mountain in North America?",
        answerList: ["Denali", "Loveland", "Hood", "Lucania",],
        answer: 0,
        answerText: "Denali",
        image: "assests/images/denali-national-park-preserve.jpg",
    
    },
    {
        question: "What is the longest river in North America?",
        answerList: ["Mississippi", "Missouri", "Colorado", "Columbia",],
        answer: 0,
        answerText: "Mississippi",
        image: "assests/images/mississippi.jpg",
    
    },
    {
        question: "What is the larget desert in Africa?",
        answerList: ["Namib", "Kalahari", "Sahara", "Karoo",],
        answer: 2,
        answerText: "Sahara",
        image: "assests/images/SaharaDesert.jpg",
    
    },
    {
        question: "How many different languages are spoken across Africa?",
        answerList: ["50", "100", "150", "1,500",],
        answer: 3,
        answerText: "1,500",
        image: "assests/images/africa-cruise-safari.jpg",
    
    }
];
var counter = 0;
var correctAnswers = 0;
var wrongAnswers= 0;
var timer = 15;
var clockRunning = false;
var intervalID

console.log(questionGroup.length);


// officially start internal count down of running clock
function startTimer (){
    if(!clockRunning){
        intervalID = setInterval(countDown, 1000);
        clockRunning = true;
    }
};

// stops timer after quesiton is answered
function stopTimer(){
    clearInterval(intervalID);
    clockRunning = false;
};

// places time in the Dom and creates a if statment to display image if question is not answered in time
function countDown() {
    $("#timer").text("You have " +timer+ " seconds");
    timer --;

    if (timer === 0) {
        $("#timer").text("You've run out of time!");
        $("#answers").empty();
        $("#questions").empty();
        $("#pictures").html("<img src = assests/images/m8hfb3.jpg />");
        counter++;
        wrongAnswers++;
        stopTimer();
        setTimeout(questionGen, 3000);
    }
}

// function pulls quesitons from array of groups and places them in the DOM as clickable answers.
// if and else statements decide if the user is right based on value assigned to each potential answer
// image will show of correct answer and the game will let you know if you answer correct or incorrectly.
// set timeout pauses the game to reflect on answer before reseting to the next questing when the counter increases,
function questionGen() {

    timer = 15
    startTimer();
    $("#answers").empty();
    console.log(questionGroup[counter].question);
    $("#questions").text(questionGroup[counter].question);
    var q1 = $("<button>").text(questionGroup[counter].answerList[0]);
    q1.data("value", 0);
    var q2 = $("<button>").text(questionGroup[counter].answerList[1]);
    q2.data("value", 1);
    var q3 = $("<button>").text(questionGroup[counter].answerList[2]);
    q3.data("value", 2);
    var q4 = $("<button>").text(questionGroup[counter].answerList[3]);
    q4.data("value", 3);
   
    console.log(q1);

    console.log(questionGroup[counter].answerList);
    $("#answers").append(q1);
    $("#answers").append(q2);
    $("#answers").append(q3);
    $("#answers").append(q4);
    $("#pictures").text(" ");

    $("button").on("click", function() {
        var userChoice = ($(this).data("value"));
        console.log(userChoice);
        console.log(questionGroup[counter].answer)
        if(counter === 10){
           endGame();
        } else if(userChoice === questionGroup[counter].answer){
            correctAnswers ++;
            $("#questions").text("Right Answer!");
            $("#answers").text(" ");
            $("#pictures").html("<img src = '" + questionGroup[counter].image + "'/>")
            stopTimer();
            setTimeout(questionGen,5000);
            counter ++;
        } else{
            wrongAnswers++;
            $("#questions").text("Wrong Answer! The answer is " + questionGroup[counter].answerText);
            $("#answers").text(" ");
            $("#pictures").html("<img src = '" + questionGroup[counter].image + "'/>")
            stopTimer();
            setTimeout(questionGen,5000);
            counter++;
        }
        if(counter===10){
            endGame();
        }
    });  

};

function endGame() {

    stopTimer();

    $("#timer").empty();                         
    $("#questions").empty();                          
    $("#answers").empty();
    $("#pictures").empty();

    $("#timer").text("Let's see how you did!")
    $("#questions").text("Correct: " +correctAnswers +"   Incorrect: " +wrongAnswers);
    if(correctAnswers > wrongAnswers){
        $("#pictures").html("<img src = assests/images/superstar.jpg />");
    }else{
        $("#pictures").html("<img src = assests/images/do-better.jpg />");
    };
    

    correctAnswers = 0;                                      
    wrongAnswers = 0;
    timer = 15;
    counter = 0;

    setTimeout(questionGen,7000);
}


window.onload = function(){
    questionGen();
} 

