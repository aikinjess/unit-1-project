//Questions
let questionBank= [
    {
        question : 'What is pushback?',
        option : ['Another name for the drink cart', 'Moving a plane backwards from the gate', 'When a passenger is being rude', 'An emergency landing' ],
        answer : 'Moving a plane backwards from the gate'
    },
    {
        question : 'What is a deadhead?',
        option : ['A sleeping passenger', 'The fourth pilot', 'An employee flying as a passenger while on duty', 'A suspicious person onboard'],
        answer : 'An employee flying as a passenger while on duty'
    },
    {
        question : 'What time is 1530?',
        option : ['5:30 p.m.', '7:30 a.m.', '3:30 p.m.', '3:30 a.m.'],
        answer : '3:30 p.m.'
    },
    {
        question : "You've arrived on time for your flight and are almost ready for takeoff. You're about to close the doors when someone in your section gets up to retrieve something from the overhead bin. What do you do?",
        option : ["Ignore them — they'll sit down eventually",'Politely ask them to sit down, then close the doors whether they do or not', 'Hold the door until they sit down, even if it delays the plane', 'Inform them that the door cannot close until they sit down' ],
        answer : 'Inform them that the door cannot close until they sit down'
    },
    {
        question : "Your first flight has just landed at ORD — what airport is that?",
        option : ['Orlando International Airport',"Chicago O'Hare International Airport",'Bordeaux-Mérignac Airport','Oxford Airport'],
        answer : "Chicago O'Hare International Airport"
    },
    {
        question : "If oxygen masks fall, which of these should a passenger do first?",
        option : ['Put a mask on','Put a mask on any child in their party','Ask a flight attendant if a mask is needed','Inflate the mask'],
        answer : 'Put a mask on'
    },
    {
        question : "Where is MCO airport located?",
        option : ['Mason City,IA','Miles City,MT','Columbus,MS','Orlando,FL'],
        answer : "Orlando,FL"  
    },
    {
        question : "What time is 0545?",
        option : ['1:45 p.m.','5:45 p.m.','11:45 a.m.','5:45 a.m.'],
        answer : '5:45 a.m.'
    },
    {
        question : "Where is CVG airport located?",
        option : ['Cincinnati, OH','Cleveland, OH','Charleston, SC', 'Columbus, OH'],
        answer : "Cincinnati, OH"  
    },
    {
        question : "Where is DTW airport located?",
        option : ['Dallas/Fort Worth, TX','Daytona Beach, FL','Dothan, AL','Detroit, MI'],
        answer : "Detroit, MI"  
    },
    {
        question : "What is a wall or partition dividing the cabins in an aircraft?",
        option : ['Bulkhead','Jumpseat','Tailwind','Headwind'],
        answer : 'Bulkhead'
    },
    {
        question : "What is the area on the aircraft where food and beverages are stored and prepared?",
        option : ['Galley','Fuselage','Holding','Descent'],
        answer : "Galley"  
    },
    {
        question : "What is a listing of available pairings which trip holder flight attendants may access to pick-up, swap, or drop a trip?",
        option : ['Credit Rig','Open Time', 'Purser', 'Open Seating'],
        answer : "Open Time"  
    },
    {
        question : "What time is 2400?",
        option : ['12:00 a.m.','12:00 p.m.','8:00 p.m.','6:00 a.m.'],
        answer : "12:00 a.m."  
    },
    {
        question : "What time is 1000?",
        option : ['1:00 p.m.','10:00 p.m.','10:00 a.m.','1:00 a.m.'],
        answer : "10:00 a.m."  
    }
]

let startButton= document.getElementById('start')
let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;


function myFunction() {
    document.getElementById('quiz-container').style.display = "block" ;
    document.getElementById('start').style.display = "none";

};



//function to display questions
function displayQuestion(){
    
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();