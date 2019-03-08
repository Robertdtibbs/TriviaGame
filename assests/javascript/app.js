

var questionGroup =[
    {
        question: "What is the largest country in Asia?",
        answerList: ["China", "India", "Japan", "Thailand"],
        answer: "China"
    
    },
    {
        question: "Which country is partially located in Europe?",
        answerList: ["Cambodia", "India", "Russia", "Vietnam"],
        answer: "Russia"
    },
    {
        question: "Name of the mountain range that runs through Europe?",   
        answerList: ["Andes", "Rocky", "Appalachain", "Alps"],
        answer: "Alps"
    
    },
    {
        question: "Which European city is further south?",
        answerList: ["Paris", "Geneva", "Oslo", "Rome"],
        answer: "Rome"
    
    },
    {
        question: "How many countries are located in South America?",
        answerList: ["12", "14", "8", "11"],
        answer: "12"
    
    },
    {
        question: "What is the largest city in South America?",
        answerList: ["Chile", "Argentina", "Brazil", "Columbia"],
        answer: "Brazil"
    
    },
    {
        question: "Name the largest mountain in North America?",
        answerList: ["Denali", "Loveland", "Hood", "Lucania"],
        answer: "Denali"
    
    },
    {
        question: "What is the longest river in North America?",
        answerList: ["Mississippi", "Missouri", "Colorado", "Columbia"],
        answer: "Mississippi"
    
    },
    {
        question: "What is the total distance from the top of Afica to the bottom?",
        answerList: ["Namib", "Kalahari", "Sahara", "Karoo"],
        answer: "Sahara"
    
    },
    {
        question: "How many different languages are spoken across Africa?",
        answerList: ["50", "100", "150", "1500"],
        answer: "1500"
    
    }
];




window.onload = function(){
    var timer = 30;
    var correctAnswers = 0;
    var wrongAnswers= 0;

    function clock(){
        timer--;
        $("#timer").text("You have " + timer +" seconds.");
        
    };
    setInterval(clock, 1000);
    $("#timer").text("You have " + timer +" seconds.");

   
    // $("#answers").text("answers");
    for(var i = 0; i < questionGroup.length; i++){
        console.log(questionGroup[i].question);
        $("#questions").text(questionGroup[i].question);
        var q1 = $("<button>").text(questionGroup[i].answerList[i]);
        console.log(questionGroup[i].answerList[i]);
        // var q2 = $("<button>").text(questionGroup[i].answerList);
        // var q3 = $("<button>").text(questionGroup[i].answerList);
        // var q4 = $("<button>").text(questionGroup[i].answerList);
        // answers.append(q1);
        $("#answers").appendchild(q1);
        // function userGuess(){

        // };


        // if(timer === 0){
        //     $("#questions").text("Out of time!");
        // };



    }
}