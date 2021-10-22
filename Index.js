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
console.log(questionContainer);
console.log(questionDisplay);
console.log(answerSlots);


//next we are going to see if we can successfully populate the content of our elements with the contents of the objects in questions
questionDisplay.innerHTML = questions[0].question;
answerSlots[0].innerHTML  = questions[0].optionA;
answerSlots[1].innerHTML  = questions[0].optionB;
answerSlots[2].innerHTML  = questions[0].optionC;
answerSlots[3].innerHTML  = questions[0].optionD;