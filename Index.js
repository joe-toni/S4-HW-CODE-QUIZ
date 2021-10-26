//Questions Object Array
    //This object will contain all the questions that our test will use, each object will hold the actual question, the four set slots of answers, and the index indicating the 
    //correct  answer for future reference.
    const questions =  
    [
    {
    question : "What does HTML stand for?",
    answerIndex: 0,
    optionA: "A.) Hyper Text Markup Language (correct)",
    optionB: "B.) Hyperlinks and Text Markup Language",
    optionC: "C.) Home Tool Markup Language",
    optionD: "D.) None of the above."
    },
    {
    question : "What is the correct HTML for creating a hyperlink?",
    answerIndex: 1,
    optionA: "A.) &lta name = “http://www.someRandomSite.com”&gt Random Site &lt/a&gt",
    optionB: "B.) &lta href = “http://www.someRandomSite.com”&gt Random Site &lt/a&gt(correct)",
    optionC: "C.) &lta url = “http://www.someRandomSite.com”&gt Random Site &lt/a&gt",
    optionD: "D.) &lta&gt“http://www.someRandomSite.com”&gt Random Site &lt/a&gt"
    },
    {
    question : "How can you make a numbered List?",
    answerIndex: 2,
    optionA: "A.) &ltdl&gt",
    optionB: "B.) &ltlist&gt",
    optionC: "C.) &ltol&gt(correct)",
    optionD: "D.) &ltul&gt"
    },
    {
    question : "What is the correct HTML for making a checkbox?",
    answerIndex: 2,
    optionA: "A.) &ltcheckbox&gt",
    optionB: "B.) &ltinput type = “check”&gt",
    optionC: "C.) &ltinput type = “checkbox&gt(correct)",
    optionD: "D.) &ltcheck&gt"
    },
    {
    question : "What is the correct HTML for making a text area?",
    answerIndex: 2,
    optionA: "A.) &ltinput type = “textarea”&gt",
    optionB: "B.) &ltinput type = “textbox”&gt",
    optionC: "C.) &lttextarea&gt(correct)",
    optionD: "D.) None of the Above."
    },
    {
    question : "What is the correct HTML element for playing video files?",
    answerIndex: 2,
    optionA: "A.) &ltmedia&gt",
    optionB: "B.) &ltmovie&gt",
    optionC: "C.) &ltvideo&gt(correct)",
    optionD: "D.) None of the Above."
    },
    {
    question : "What is the correct HTML element for playing audio files?",
    answerIndex: 0,
    optionA: "A.) &ltaudio&gt (correct)",
    optionB: "B.) &ltmp3&gt",
    optionC: "C.) &ltsound&gt",
    optionD: "D.) None of the Above."
    },
    {
    question : "What does CSS stand for?",
    answerIndex: 3,
    optionA: "A.) Colorful Style Sheets",
    optionB: "B.) Computer Style Sheets",
    optionC: "C.) Creative Style Sheets",
    optionD: "D.) Cascading Style Sheets(correct)"
    },
    {
    question : "Which is the correct CSS syntax?",
    answerIndex: 0,
    optionA: "A.) body{color:black;}(correct)",
    optionB: "B.) body:color=black;",
    optionC: "C.) {body:color=black;}",
    optionD: "D.) {body:color:black;}"
    },
    {
    question : "What is the correct CSS syntax for making all the &ltp&gt elements bold?",
    answerIndex: 3,
    optionA: "A.) &ltp style= “font-size:bold;”&gt",
    optionB: "B.) p{text-size:bold;}",
    optionC: "C.) &ltp style= “text-size:bold;”&gt",
    optionD: "D.) p{font-weight:bold;}(correct)"
    },
    {
    question : "How do you make each work in a text start with a capital letter?",
    answerIndex: 3,
    optionA: "A.) text-style:capitalize",
    optionB: "B.) transform:capitalize",
    optionC: "C.) You can’t do that with CSS",
    optionD: "D.) text-transform:capitalize (correct)"
    },
    {
    question : "How do you make a list that lists its items with squares?",
    answerIndex: 0,
    optionA: "A.) list-style-type: square; (correct)",
    optionB: "B.) list-type: square;",
    optionC: "C.) list: square;",
    optionD: "D.) list-decoration-type: square;"
    },
    {
    question : "How do you group selector in CSS?",
    answerIndex: 1,
    optionA: "A.) You can’t group selectors in CSS",
    optionB: "B.) Separate each selector with a comma (correct)",
    optionC: "C.) Separate each selector with a space",
    optionD: "D.) Separate each selector with a plus sign"
    },
    {
    question : "How do you write “Hello World” in an alert box?",
    answerIndex: 1,
    optionA: "A.) msg(“Hello World”);",
    optionB: "B.) alert(“Hello World”); (correct)",
    optionC: "C.) alertBox(“Hello World”);",
    optionD: "D.) msgBox(“Hello World”);"
    },
    {
    question : "How do you create a function in JavaScript?",
    answerIndex: 1,
    optionA: "A.) function = myFunction()",
    optionB: "B.) function myFunction() (correct)",
    optionC: "C.) function:myFunction()",
    optionD: "D.) myFunction = function()"
    },
    {
    question : "How do you write an IF statement in JavaScript?",
    answerIndex: 2,
    optionA: "A.) if i = 5 then",
    optionB: "B.) if i == 5 then",
    optionC: "C.) if(i == 5) (correct)",
    optionD: "D.) if i = 5"
    },
    {
    question : "What is the correct way to write a JavaScript array?",
    answerIndex: 2,
    optionA: "A.) var colors = “red”, “green”, “blue”",
    optionB: "B.) var colors = (1:”red”, 2:”green”, 3:”blue”)",
    optionC: "C.) var colors = [“red”, “green”, “blue”] (correct)",
    optionD: "D.) var colors = 1 = (“red”), 2 = (“green”), 3 = (“blue”)"
    },
    {
    question : "How can you detect the client’s browser name?",
    answerIndex: 1,
    optionA: "A.) brower.name",
    optionB: "B.) navigator.appName (correct)",
    optionC: "C.) client.navName",
    optionD: "D.) this.name"
    },
    {
    question : "Which operator is used to assign a value to a variable?",
    answerIndex: 0,
    optionA: "A.) = (correct) ",
    optionB: "B.) * ",
    optionC: "C.) - ",
    optionD: "D.) x "
    },
    {
    question : "Which event occurs when the user click on an HTML element?",
    answerIndex: 0,
    optionA: "A.) onclick (correct)",
    optionB: "B.) onchange",
    optionC: "C.) onmouseover",
    optionD: "D.) onmouseclick"
    }
    ];
//spacing

 //Query Selected HTML Elements
    //This portion contains all the elements we pulled from our Index.html file and set them as global variables for reference through out the script
    const timer = document.querySelector(".clock");

    const startScreen = document.querySelector(".starting_screen");
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
    var time = 60;
    var started = false;
    var finished = false;
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
    var questionsIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
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
            setInterval(runClock,1000);
            startScreen.style.visibility = "collapse";
            startScreen.style.zIndex = -10;

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
    //is the last question
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
                     }
                     else
                     {
                        time -=5;
                        if(time<0)
                        {timer.innerHTML = ": 0";}
                        else
                        {timer.innerHTML = `: ${time}`;}

                     };
                     finished = true;
                     questionContainer.style.visibility = "collapse";
                     questionContainer.style.zIndex = -10;
                     gameOver.style.visibility = "visible";
                     gameOver.style.zIndex = 10;
                     gameOverScore.innerHTML = `You are done, your score is ${score}.`;
                }
                //This runs if there are still more questions to be answered moving the index along so that each question can be reloaded
               else 
                {
                    if(submission.dataset.correct === "true")
                    {
                        score++;
                     }
                     else
                     {
                        time -=5;
                        if(time<0)
                        {timer.innerHTML = ": 0";}
                        else
                        {timer.innerHTML = `: ${time}`;}
                     }
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
         console.log(userName.value);
         if(userName.value == '')
         {
             userName.placeholder = "Can not be left Blank"
         }
         else
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
     }
//spacing

//Display High Scores
     //This object will take the first ten objects from our local storage created list of scores and display them by filling in their designated slots in the html file and displaying nothing
     // if our list of scores are empty.
     function displayHighScores()
     {
         if (highScores.length === 0)
         {
             for(let i = 0; i < 10; i++)
             {
                 highScoreSlots[i].style.display = "none";
                 highScoreSlots[i].innerHTML = null;
             }
         }
         else
         {
            for (let i = 0; i < highScores.length&& i < 10; i++)
            {
                highScoreSlots[i].style.display = "block";
                highScoreSlots[i].innerHTML = `${highScores[i].name} - ${highScores[i].hScore}`;
            }
        }
         highScoreBoard.style.visibility = "visible";
         highScoreBoard.style.zIndex = 10;

     }
//spacing

//Clearing the Score Board
    //Thi function makes sure that no scores are saved either on our local varaible or on the local storage
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
//spacing

//Sorting HighScores
    //This function will use bubble sort to sort our local array of names and highscores in order from highest to lowest
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
//spacing

//Keeping Time
    //This function runs every second after being established in the start test function and counts down from a set global variable
    //Setting the game over screen if time runs out or stoping the clock if the test is completed
    function runClock()
    {
        if(time > 0 && !finished)
        {  
            timer.innerHTML = `: ${time}`;
            time--;
        }
        else if(!finished)
        {
            timer.innerHTML = `: 0`;
            questionContainer.style.visibility = "collapse";
            questionContainer.style.zIndex = -10;
            gameOver.style.visibility = "visible";
            gameOver.style.zIndex = 10;
            gameOverScore.innerHTML = `Time is up, your score is ${score}.`;
        }
    }
//spacing

//This is a cheat function that is called from the highScore board either at the end of each test or whenever the 
//highscore board is closed it resets the window where all the correct starting conditions should be checked for or set up by the 
//default way the app is run
    function reset()
{location.reload()}
