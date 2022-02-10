//created by RONALD,KOWSIKA,THILAGAVATHY
alert("Simple Quiz game");
alert("Inspired by my best friend Bhumi organization");
alert("Project done by RONALD,KOWSIKA,THILAGAVATHY. LET'S START THE GAME")


window.onload = function() {

const questions = 
[ 

 { 

  question: "The study that is considered to be the mirror of life?", 
  answers: ["Biology","Math","Literature","History"],
   correct: "Literature"
   
   },
   
 { 
    
   question: "Celeberities now recently being highly celebrated are?", 
    answers:["Actor/Actress","Sports person","Popstars","Youtubers"], 
    correct: "Popstars"
    
    }, 
    
    { 
    
    question: "Life hacks can be learnt through?", 
    answers: ["Experience","Lessons","Movies","Failures"], 
    correct: "Experience"
    
    }, 
    
    { 
    
    question: "Which is the foremost soft skill that is expected all over?", 
 
 answers: ["Anger management","Leadership","Interpersonal skill","Communication skill"],
  correct: "Communication skill"
  
  }, 
  
  { 
  
  question: "Which country is rich in Tradition?", 
  
  answers: ["India","Korea","Spain","Italy"], 
  correct: "Italy"
  
  }, 
  
  {
    question: "Which city is called heaven of India?",
 
  answers: ["Jammu&Kashmir","Bengaluru","Chennai","Pune"], 
  correct: "Jammu&Kashmir"
       
      }, 
      
      { 
      
      question: "The nick name of Eiffel Tower is?", answers: ["The steel man","The iron lady","The steel lady","The iron man"], correct: "The iron lady"
    }, 
    
    { 
    
    question: "Subject that deals with matter & energy?", 
 answers: ["Physics","Chemistry","Biology","Botony"],
 correct: "Physics" 
 
 }, 
 
 { 
 
 question: "Which animal has longer lifespan?", 
 
 answers: ["Bowhead whale","Herman's tortoise","White elephant","Jelly fish"], correct: "Bowhead whale"
 
 }, 
 
 { 
 
 question: "The moto of HUMAN which is the basic of all needs?", answers: ["Money","Fame","Job","Education"], 
 
 correct: "Money"
 
 },
 
 ]; 
 
const btn = document.getElementsByClassName("btn");

const btns_wrapper = document.getElementById("btns-wrapper");

const qtn = document.getElementById("question");

let i=0;

const start_btn = document.getElementById("start-btn");

const content = document.getElementById("wrapper");

let qtn_count = document.getElementById("qtn-count");

let max_qtn = document.getElementById("max-qtn");

let score = document.getElementById("score");

let max_score = document.getElementById("max-score");

let isCorrect = false;

 start_btn.addEventListener("click" , ()=> {     
 
 content.style.display = "block";
     start_btn.style.display = "none";

    score.textContent = 0;
 
qtn.textContent = questions[i].question;

qtn_count.textContent = 1;  max_qtn.textContent = questions.length;    max_score.textContent = questions.length;     btn[0].textContent = questions[0].answers[0];    btn[1].textContent = questions[0].answers[1];    btn[2].textContent = questions[0].answers[2];    btn[3].textContent = questions[0].answers[3]; 

}); 


btns_wrapper.addEventListener("click",(e)=> {    

 if (e.target.tagName === "BUTTON") {
 //If a button is clicked         
 if (e.target.innerText === questions[i].correct.toString()) {
 isCorrect = true;
 checkAnswer(e.target);
// If answer is correct it changes the background color to green     
    score.textContent++;
// If answer is correct increase score         
}         

else {
 isCorrect = false;
 checkAnswer(e.target);
 // If answer is wrong it changes the background color to red    
 } 
 i++; 
 btns_wrapper.style.pointerEvents = "none"; //Disables click events
 
  setTimeout(function () {    
   btns_wrapper.style.pointerEvents = "auto";
  },1500) 
  
     setTimeout(function() { 
  if (i >= questions.length) {
  
  alert(`You got ${score.textContent} answers right out of ${questions.length} questions`); //If it's the last question                
  reset();
       
      }    
  
qtn.textContent = questions[i].question;             btn[0].textContent = questions[i].answers[0];            btn[1].textContent = questions[i].answers[1];            btn[2].textContent = questions[i].answers[2];            btn[3].textContent = questions[i].answers[3];                qtn_count.textContent++;

},1500) 

}     

}); 

//function to check if answer is right

function checkAnswer(obj){ 

let original = obj.style.backgroundColor; 

if (isCorrect) { 

obj.style.backgroundColor = 'lightgreen'; 

} else 

{ 

obj.style.backgroundColor = '#e4333b'; 

} 

setTimeout(function(){ 

obj.style.backgroundColor = original; 

}, 1500);

} 

//function to restart the quiz after the last question

function reset() {

i = 0;
score.textContent = 0;
score.textContent = 0;    
content.style.display = "none";start_btn.style.display = "block";

}

}
