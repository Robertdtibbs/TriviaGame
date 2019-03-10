window.onload = function(){


// (function () {
    var questionGroup =[
        {
            question: "What is the largest country in Asia?",
            answerList: ["China", "India", "Japan", "Thailand",],
            answer: "China"
        
        },
        {
            question: "Which country is partially located in Europe?",
            answerList: ["Cambodia", "India", "Russia", "Vietnam",],
            answer: "Russia"
        },
        {
            question: "Name of the mountain range that runs through Europe?",   
            answerList: ["Andes", "Rocky", "Appalachain", "Alps",],
            answer: "Alps"
        
        },
        {
            question: "Which European city is further south?",
            answerList: ["Paris", "Geneva", "Oslo", "Rome",],
            answer: "Rome"
        
        },
        {
            question: "How many countries are located in South America?",
            answerList: ["12", "14", "8", "11",],
            answer: "12"
        
        },
        {
            question: "What is the largest city in South America?",
            answerList: ["Chile", "Argentina", "Brazil", "Columbia",],
            answer: "Brazil"
        
        },
        {
            question: "Name the largest mountain in North America?",
            answerList: ["Denali", "Loveland", "Hood", "Lucania",],
            answer: "Denali"
        
        },
        {
            question: "What is the longest river in North America?",
            answerList: ["Mississippi", "Missouri", "Colorado", "Columbia",],
            answer: "Mississippi"
        
        },
        {
            question: "What is the total distance from the top of Afica to the bottom?",
            answerList: ["Namib", "Kalahari", "Sahara", "Karoo",],
            answer: "Sahara"
        
        },
        {
            question: "How many different languages are spoken across Africa?",
            answerList: ["50", "100", "150", "1500",],
            answer: "1500"
        
        }
    ];
    
//     var correctArry = [];
//     var wrongArry = [];
//     var correctQuestions = correctArry.length + 1;
//     var wrongQuestions = wrongArry.length + 1;
    
//     var quiz = $('questions');

//     function questionSelection(index){
//         var questSelct = $('<div>', {id: 'question'});
    
//         var header = $('<h2>Question ' + (index + 1) + ':</h2>');
//         questSelct.append(header);
    
//         var question = $('<p>').append(questions[index].question);
//         questSelct.append(question);
    
//         var buttons = createButton(index);
//         questSelct.append(buttons)
//     }
// }




























// Broken Code
// function to grab random quesitons and answer array
// for(var i = 0; i < questionGroup.length; i++){
//     console.log(questionGroup[i].question);
//     console.log(questionGroup[i].answerList[0]);
//     console.log(questionGroup[i].answerList[1]);
//     console.log(questionGroup[i].answerList[2]);
//     console.log(questionGroup[i].answerList[3]);
//     console.log(questionGroup[i].answer);
//     var question = questionGroup[i];
//     $("#questions").text(question);
//     console.log(question);
    
// }




















//Broken code below


    var timer = 30;
    var correctAnswers = 0;
    var wrongAnswers= 0;

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
    
   var counter = 0;
   questionGen();
    // $("#answers").text("answers");
    function questionGen() {
        // for(var i = 0; i < questionGroup.length; i++){
            console.log(questionGroup[counter].question);
            $("#questions").text(questionGroup[counter].question);
            var q1 = $("<button>").text(questionGroup[counter].answerList[0]);
            var q2 = $("<button>").text(questionGroup[counter].answerList[1]);
            var q3 = $("<button>").text(questionGroup[counter].answerList[2]);
            var q4 = $("<button>").text(questionGroup[counter].answerList[3]);
            console.log(questionGroup[counter].answerList);
            var answers = questionGroup[counter].answerList;
            // answers.append(q1);
            $("#answers").append(q1);
            $("#answers").append(q2);
            $("#answers").append(q3);
            $("#answers").append(q4);

        // $("button").on("click", function(){
        //     var userClick = ($(this).text());
        //     if(userClick === questionGroup[i].answer){
        //         correctAnswers++;
        //     }else{
        //         wrongAnswers--;
        //     }
        // }
        
        };


        // if(timer === 0){
        //     $("#questions").text("Out of time!");
        // };



    }
