
var questionGroup =[
    {
        question: "What is the largest country in Asia?",
        answerList: ["China", "India", "Japan", "Thailand",],
        answer: 0,
    
    },
    {
        question: "Which country is partially located in Europe?",
        answerList: ["Cambodia", "India", "Russia", "Vietnam",],
        answer: 3,
    },
    {
        question: "Name of the mountain range that runs through Europe?",   
        answerList: ["Andes", "Rocky", "Appalachain", "Alps",],
        answer: 3,
    
    },
    {
        question: "Which European city is further south?",
        answerList: ["Paris", "Geneva", "Oslo", "Rome",],
        answer: 3,
    
    },
    {
        question: "How many countries are located in South America?",
        answerList: ["12", "14", "8", "11",],
        answer: 0,
    
    },
    {
        question: "What is the largest city in South America?",
        answerList: ["Chile", "Argentina", "Brazil", "Columbia",],
        answer: 2,
    
    },
    {
        question: "Name the largest mountain in North America?",
        answerList: ["Denali", "Loveland", "Hood", "Lucania",],
        answer: 0,
    
    },
    {
        question: "What is the longest river in North America?",
        answerList: ["Mississippi", "Missouri", "Colorado", "Columbia",],
        answer: 0,
    
    },
    {
        question: "What is the total distance from the top of Afica to the bottom?",
        answerList: ["Namib", "Kalahari", "Sahara", "Karoo",],
        answer: 2,
    
    },
    {
        question: "How many different languages are spoken across Africa?",
        answerList: ["50", "100", "150", "1500",],
        answer: 3,
    
    }
];
var counter = 0;
var correctAnswers = 0;
var wrongAnswers= 0;
var timer = 30;

function clock(){
    timer--;
    $("#timer").text("You have " + timer +" seconds.");
        if(timer < 1){
            clearTimeout(timer);
            $("#timer").text("Times Up!");
        };
    
};
setInterval(clock, 1000);
$("#timer").text("You have " + timer +" seconds.");


function questionGen() {
    console.log(questionGroup[counter].question);
    $("#questions").text(questionGroup[counter].question);
    var q1 = $("<button>").text(questionGroup[counter].answerList[0], "value", 0);
    q1.data("value", 0);
    var q2 = $("<button>").text(questionGroup[counter].answerList[1], "value", 1);
    q2.data("value", 1);
    var q3 = $("<button>").text(questionGroup[counter].answerList[2], "value", 2);
    q3.data("value", 2);
    var q4 = $("<button>").text(questionGroup[counter].answerList[3], "value", 3);
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
            counter ++;
            $("#questions").text("Right Answer!");
            $("#answers").empty();
            questionGenReset()
        
    
        } else{
            wrongAnswers++;
            counter++;
            $("#questions").text("Wrong Answer!");
            $("#answers").empty();
            questionGenReset()
        }
    });

};

function questionGenReset() {
    console.log(questionGroup[counter].question);
    $("#questions").text(questionGroup[counter].question);
    var q1 = $("<button>").text(questionGroup[counter].answerList[0], "value", 0);
    q1.data("value", 0);
    var q2 = $("<button>").text(questionGroup[counter].answerList[1], "value", 1);
    q2.data("value", 1);
    var q3 = $("<button>").text(questionGroup[counter].answerList[2], "value", 2);
    q3.data("value", 2);
    var q4 = $("<button>").text(questionGroup[counter].answerList[3], "value", 3);
    q4.data("value", 3);
   
    console.log(q1);

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
            counter ++;
            $("#questions").text("Right Answer!");
            $("#answers").empty();
            questionGenReset()
        
    
        } else{
            wrongAnswers++;
            counter++;
            $("#questions").text("Wrong Answer!");
            $("#answers").empty();
            questionGenReset()
        }
    });

};


window.onload = function(){
    questionGen();
    clock();
} 
