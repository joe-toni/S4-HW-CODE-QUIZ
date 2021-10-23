//Questions Object Array
    //This object will contain all the questions that our test will use, each object will hold the actual question, the four set slots of answers, and the index indicating the 
    //correct  answer for future reference.
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
//spacing

 //Query Selected HTML Elements
    //This portion contains all the elements we pulled from our Index.html file and set them as global variables for reference through out the script
    const startBtn = document.querySelector(".start_btn");

    const  questionContainer = document.querySelector(".question_container");
    const questionDisplay = questionContainer.querySelector(".prompt");
    const answerSlots = questionContainer.querySelectorAll(".answer");

    const gameOver = document.querySelector(".game_over_screen");
    const gameOverScore = document.querySelector(".your_score");
    const userName = document.querySelector("input");

    const highScoreBoard = document.querySelector("footer");
    const highScoreSlots = highScoreBoard.querySelectorAll(".highscore")
//spacing

//Global Variables
    //These are some of the simpler variables that we will use through out the script to keep track of  whether the test has started, what question we are on for reference, and the players score.
    var started = false;
    var score  = 0;
    var index = 0;  
//spacing

//Persisting HighScores
    
    //This portion sets up a local global variable that will hold an array of previous user names and scores it also calls on two functions to setup our local storage object
    var highScores = [];
    console.log(highScores);
    checkStorage();
    pullStorage();
    
    //This function is called every time the page is reloaded and is used to make sure that local storage always contains the object we will use to persist our users data.
    function checkStorage()
    {
        if (localStorage.getItem("highScores") === null)
        {
             localStorage.setItem("highScores", JSON.stringify(highScores));        
        }
    };

    //This function is called every time the page is reloaded and supposed to populate our initially empty array with what ever content is in our local storage object.
    function pullStorage()
    {
        let savedScores = JSON.parse(localStorage.getItem("highScores"));
        for (let i = 0; i < savedScores.length; i++)
        {
            highScores.push(savedScores[i]);
        }
    };

    //This function is meant to make sure now repeated data is push into local storage, since our local array should contain all old and new values here we clear the 
    //storage entirely and reset the object with a stringified version of our updated highScores array.
    function updateStorage()
    {
        localStorage.clear();
        localStorage.setItem("highScores",JSON.stringify(highScores));
        console.log(highScores);
    };

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

//Setting Quiz Starting Conditions
    //This function should make sure that all the unused sections are correctly placed at the back, that the local storage is reset to accuratly present values on both 
    // new starts and retrys, and that the index and score are reset for a new test.
    function startTheQuiz()
        {
            startBtn.style.visibility = "collapse";
            startBtn.style.zIndex = -10;

            questionContainer.style.visibility = "visible";
            questionContainer.style.zIndex = 10;

            highScoreBoard.style.visibility = "collapse"
            highScoreBoard.style.zIndex = -10;

            highScoreBoard.style.visibility = "collapse";
            highScoreBoard.style.zIndex = -10;
            scramble();
            started = true;
            score = 0;
            index = 0;
            loadTheQuestion();
        }
//spacing

//Reseting the Question Display
    // This function will reset all the questions answer slots to indicate false or incorrect before populating the html element with the question and answers
    //indicated by the index that moves through a list of randomized indecies and setting the corresponding slot to correct for score keeping.
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
//spacing

//Answer Submission And Quiz Progression
    //This function will get the element that was clicked and after determining if the test is in progress and the proceed to check if the current submission
    //is the final question, or not pushing the game to a game over screen if yes.
    function submitAnswer()
        {
            let submission = event.target;
            //This checks to see if the test is in progress to avoid clicks accidentally triggering a submission
            if(started)
            {
                //This if statement checks to see if the current submission is for the final question in our list so that it may procced  as normal
                //but end buy triggering the game over screen and hiding the test
                if (index === questions.length-1)
                {
                    if(submission.dataset.correct === "true")
                    {
                        score++;
                     };
                     questionContainer.style.visibility = "collapse";
                     gameOver.style.visibility = "visible";
                     gameOver.style.zIndex = 10;
                     gameOverScore.innerHTML = `You are done, your score is ${score}.`;
                }
                //This simply check to see if the current submission is the correct answer and incramenting the index before reseting the questions
               else 
                {
                    if(submission.dataset.correct === "true")
                    {
                        score++;
                     };
                     index++;
                     loadTheQuestion()
                }
            }
        }
//spacing

//Game Over Screen
    //This function will display what is essentially the game over prompt which will take the users name and the current score saving it to an object before pushing it to our
    // local array of user names and scores object.
     function submitUser()
     {
         let newHighScore = 
         {
             name: userName.value,
             hScore: score
         };
         highScores.push(newHighScore);
         sortScores(highScores);
         updateStorage();
         gameOver.style.visibility = "collapse";
         gameOver.style.zIndex = -10;
         displayHighScores();
     }
//spacing

//Display High Scores
     //This object will take the first ten objects from our local storage created list of scores and display them by filling in their designated slots in the html file.
     function displayHighScores()
     {
         if (highScores.length === 0)
         {
             for(let i = 0; i < 10; i++)
             {
                 highScoreSlots[i].innerHTML = null;
             }
         }
         else
         {
            for (let i = 0; i < highScores.length&& i < 10; i++)
            {
                highScoreSlots[i].innerHTML = `${highScores[i].name} : ${highScores[i].hScore}`;
            }
        }
         highScoreBoard.style.visibility = "visible";
         highScoreBoard.style.zIndex = 10;

     }
//spacing

function clearHighScores()
{
    localStorage.clear()
    while (highScores.length > 0)
        {
            highScores.pop()
        }
  
    updateStorage();
    displayHighScores();
}

function sortScores(array)
{
    let sorted = false;
    if (array.length>1 && !sorted)
    {
         while(!sorted)
         {
             sorted = true;
             for (let i = 1; i < array.length; i++)
             { 
                 if ((array[i-1].hScore) < ( array[i].hScore))
                 {
                     sorted = false;
                     tempName = array[i-1].name;
                     tempScore = array[i-1].hScore;
                     array[i-1].name = array[i].name;
                     array[i-1].hScore = array[i].hScore;
                     array[i].name = tempName;
                     array[i].hScore = tempScore;
                }
            }
        }
    }
}

function reset()
{location.reload()}