//We are gonna start off by creating an object list of sample questions for testing that will later be adjusted
// This list of objects will have a number of attributes for 
const questions =  
[
    {
    question : "This is  question #1",
    answerIndex: 0,
    optionA: "A.) answer1a",
    optionB: "B.) answer1b",
    optionC: "C.) answer1c",
    optionD: "D.) answer1d"
    },
    {
    question : "This is  question #2",
    answerIndex: 1,
    optionA: "A.) answer2a",
    optionB: "B.) answer2b",
    optionC: "C.) answer2c",
    optionD: "D.) answer2d"
    },
    {
    question : "This is  question #3",
    answerIndex: 2,
    optionA: "A.) answer3a",
    optionB: "B.) answer3b",
    optionC: "C.) answer3c",
    optionD: "D.) answer3d"
    },
    {
    question : "This is question #4",
    answerIndex: 3,
    optionA: "A.) answer4a",
    optionB: "B.) answer4b",
    optionC: "C.) answer4c",
    optionD: "D.) answer4d"
    },
    {
    question : "This is  question #5",
    answerIndex: 0,
    optionA: "A.) answer5a",
    optionB: "B.) answer5b",
    optionC: "C.) answer5c",
    optionD: "D.) answer5d"
    },
    {
    question : "This is aquestion #6",
    answerIndex: 1,
    optionA: "A.) answer6a",
    optionB: "B.) answer6b",
    optionC: "C.) answer6c",
    optionD: "D.) answer6d"
    },
    {
    question : "This is a question #7",
    answerIndex: 2,
    optionA: "A.) answer7a",
    optionB: "B.) answer7b",
    optionC: "C.) answer7c",
    optionD: "D.) answer7d"
    },
    {
    question : "This is a question #8",
    answerIndex: 3,
    optionA: "A.) answer8a",
    optionB: "B.) answer8b",
    optionC: "C.) answer8c",
    optionD: "D.) answer8d"
    }
];

//Up next we are going to pull in the question container and all its children which we will use to later display one question at a time
const  questionContainer = document.querySelector(".question_container");
const questionDisplay = questionContainer.querySelector(".prompt");
const answerSlots = questionContainer.querySelectorAll(".answer");
const endMessage = document.querySelector(".name_input");
console.log(questionContainer);
console.log(questionDisplay);
console.log(answerSlots);

//These are the variables that will be used through out our javascript function to keep track of the questions, the score and 
//what ever else we might need
var score  = 0;
var index = 0;


//we are going to establish a basic start function that will initialize the quiz with all the correct starting conditions
function startTheQuiz()
{
    score = 0;
    index = 0;
    loadTheQuestion();
}


//We are going to set up an index that for now will allow us to cylcle through the questions in our questions array with the help of a submit
//function which will be added to each of our answer options like in the demo provided



function loadTheQuestion() 
{
    questionDisplay.innerHTML = questions[index].question;
    answerSlots[0].innerHTML  = questions[index].optionA;
    answerSlots[1].innerHTML  = questions[index].optionB;
    answerSlots[2].innerHTML  = questions[index].optionC;
    answerSlots[3].innerHTML  = questions[index].optionD;

    console.log(questionContainer);
    console.log(questionDisplay);
    console.log(answerSlots);
}

// here we are gonna establish basic functionallity and have the test move on to the next question any time any answer is submited
function submitAnswer()
{
    if(index<8)
    {
        index++;
        loadTheQuestion()
    }
    else
    {
        endMessage.innerHTML = "You are done";
    }
}

