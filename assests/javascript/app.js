
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
var timer = 30;

console.log(questionGroup.length);

function clock(){
    timer--;
    $("#timer").text("You have " + timer +" seconds.");
        if(timer < 1){
            clearTimeout(timer);
            $("#timer").text("Times Up!");
        };
    
};
go = setInterval(clock, 1000);
$("#timer").text("You have " + timer +" seconds.");


function questionGen() {
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
   

    console.log(questionGroup[counter].answerList);
    // var answers = questionGroup[counter].answerList;
    // answers.append(q1);
    $("#answers").append(q1);
    $("#answers").append(q2);
    $("#answers").append(q3);
    $("#answers").append(q4);

    $("button").on("click", function() {
        var userChoice = ($(this).data("value"));
        console.log(userChoice);
        console.log(questionGroup[counter].answer)
        if(userChoice === questionGroup[counter].answer){
            correctAnswers ++;
            
            $("#questions").text("Right Answer!");
            $("#answers").text(" ");
            $("#pictures").html("<img src = '" + questionGroup[counter].image + "'/>")
            pause = setInterval(questionGenReset, 3000);
            // clearInterval(go);
            counter ++;
            
        
    
        } else{
            wrongAnswers++;
            
            $("#questions").text("Wrong Answer! The answer is " + questionGroup[counter].answerText);
            $("#answers").text(" ");
            $("#pictures").html("<img src = '" + questionGroup[counter].image + "'/>")
            pause = setInterval(questionGenReset, 3000);
            // clearInterval(go);
            counter++;
        }
    });

};

function questionGenReset() {
    clearInterval(pause);
    timer = 30
    clock();
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
    // var answers = questionGroup[counter].answerList;
    // answers.append(q1);
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
            pause = setInterval(questionGenReset, 3000);
            // clearInterval(go);
            counter ++;
        } else{
            wrongAnswers++;
            $("#questions").text("Wrong Answer! The answer is " + questionGroup[counter].answerText);
            $("#answers").text(" ");
            $("#pictures").html("<img src = '" + questionGroup[counter].image + "'/>")
            pause = setInterval(questionGenReset, 3000);
            // clearInterval(go);
            counter++;
        }
        if(counter===10){
            endGame();
        }
    });  

};

function endGame() {

    clearInterval(go)

    $("#timer").empty();                         
    $("#questions").empty();                          
    $("#answers").empty();
    $("#pictures").empty();

    if (timer === -1) {
        $("#questions").text("You Ran out of time!");
    }
    else {
        $("#questions").text("Correct: " +correctAnswers +"   Incorrect: " +wrongAnswers);
    }

    correctAnswers = 0;                                      
    wrongAnswers = 0;
    timer = 30;
    counter = 0;

    setTimeout(questionGen,7000);
}


window.onload = function(){
    questionGen();
    clock();
} 
