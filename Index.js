//We are gonna start off by creating an object list of sample questions for testing that will later be adjusted
// This list of objects will have a number of attributes for 
const questions =  
[
    {
    question : "This is question #1",
    answerIndex: 0,
    optionA: "A.) answer1a",
    optionB: "B.) answer1b",
    optionC: "C.) answer1c",
    optionD: "D.) answer1d"
    },
    {
    question : "This is question #2",
    answerIndex: 1,
    optionA: "A.) answer2a",
    optionB: "B.) answer2b",
    optionC: "C.) answer2c",
    optionD: "D.) answer2d"
    },
    {
    question : "This is question #3",
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
    question : "This is question #5",
    answerIndex: 0,
    optionA: "A.) answer5a",
    optionB: "B.) answer5b",
    optionC: "C.) answer5c",
    optionD: "D.) answer5d"
    },
    {
    question : "This is question #6",
    answerIndex: 1,
    optionA: "A.) answer6a",
    optionB: "B.) answer6b",
    optionC: "C.) answer6c",
    optionD: "D.) answer6d"
    },
    {
    question : "This is question #7",
    answerIndex: 2,
    optionA: "A.) answer7a",
    optionB: "B.) answer7b",
    optionC: "C.) answer7c",
    optionD: "D.) answer7d"
    },
    {
    question : "This is question #8",
    answerIndex: 3,
    optionA: "A.) answer8a",
    optionB: "B.) answer8b",
    optionC: "C.) answer8c",
    optionD: "D.) answer8d"
    }
];

//Query Selected HTML Elements
    //Up next we are going to pull in the question container and all its children which we will use to later display one question at a time
    const startBtn = document.querySelector(".start_btn");
    const  questionContainer = document.querySelector(".question_container");
    const questionDisplay = questionContainer.querySelector(".prompt");
    const answerSlots = questionContainer.querySelectorAll(".answer");
    const endMessage = document.querySelector(".name_input");
//spacing

//Global Variables
    //These are the variables that will be used through out our javascript function to keep track of the questions, the score and 
    //what ever else we might need
    var started = false;
    var score  = 0;
    var index = 0;
//spacing

//Random Index Generator
    //This portion of the code will allow us to ask our preset questions in a random order every time we run the test
    var questionsIndex = [0,1,2,3,4,5,6,7];
    scramble();
    function scramble() 
    {
        for (i = 0; i < questionsIndex.length; i++)
        {
            var randomIndex = Math.floor(Math.random()*questionsIndex.length);
            var initial = questionsIndex[i];
            questionsIndex[i] = questionsIndex[randomIndex];
            questionsIndex[randomIndex] = initial;
        }
    }
//spacing


//we are going to establish a basic start function that will initialize the quiz with all the correct starting conditions
function startTheQuiz()
    {
        startBtn.style.visibility = "collapse";
        startBtn.style.zIndex = -10;

        questionContainer.style.visibility = "visible";
        questionContainer.style.zIndex = 10;

        started = true;
        score = 0;
        index = 0;
        loadTheQuestion();
    }
//spacing


//We are going to set up an index that for now will allow us to cylcle through the questions in our questions array with the help of a submit
//function which will be added to each of our answer options like in the demo provided
function loadTheQuestion() 
{
    for(let i = 0; i < 4; i++)
    {
        answerSlots[i].dataset.correct = false;
    } 
    answerSlots[questions[questionsIndex[index]].answerIndex].dataset.correct = true;

    questionDisplay.innerHTML = questions[questionsIndex[index]].question;
    answerSlots[0].innerHTML  = questions[questionsIndex[index]].optionA;
    answerSlots[1].innerHTML  = questions[questionsIndex[index]].optionB;
    answerSlots[2].innerHTML  = questions[questionsIndex[index]].optionC;
    answerSlots[3].innerHTML  = questions[questionsIndex[index]].optionD;
}

//We have now adjusted this function to catch if the user has given the correct answer as well as correctly tracking the 
//submissions up intil the last question where a final submission whill trigger an end state for the program.
function submitAnswer()
{
    //This determines which answer was clicked for submission
    let submission = event.target;

    //This initial started condition currently ensures that questions are not accidentally clickable before the quiz is started
    if(started)
    {
        //This if condition starts by checking if the user is on the final submission and running the function as normal if not
        if (index === questions.length-1)
        {
            if(submission.dataset.correct === "true")
            {
                score++;
             };
             questionContainer.style.visibility = "collapse";
             endMessage.innerHTML = `You are done, your score is ${score}.`;
        }
       else 
        {
            if(submission.dataset.correct === "true")
            {
                score++;
                console.log(score);
             };
             index++;
             loadTheQuestion()
        }
    }
}

