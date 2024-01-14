const questions =[
    {
        question: "How wrote the Nation Anthem Of Pakistan?",
        answers:[
            { text: "Sir Syed Ahmed Khan", correct: false},
            { text: "Hafeez Jhalandari", correct: true},
            { text: "Allama Iqbal", correct: false},
            { text: "Mirza Ghalib", correct: false},        ]
        },
        {
            question: "National bird of Pakistan is?",
            answers:[
                { text: "Hawk", correct: false},
                { text: "Chukar Partridge", correct: true},
                { text: "Eagle", correct: false},
                { text: "Humming Bird", correct: false},        ]
            },
            {
                question: "Which is the largest planet of our solar system?",
                answers:[
                    { text: "Venus", correct: false},
                    { text: "Jupiter", correct: true},
                    { text: "Mars", correct: false},
                    { text: "Earth", correct: false},        ]
                },
                {
                    question: "How many planets in our solar system?",
                    answers:[
                        { text: "Seven", correct: false},
                        { text: "Nine", correct: false},
                        { text: "Eight", correct: true},
                        { text: "Six", correct: false},        ]
                    },
                    {
                        question: "How many colors in a rainbow?",
                        answers:[
                            { text: "Seven", correct: true},
                            { text: "Nine", correct: false},
                            { text: "Eight", correct: false},
                            { text: "Six", correct: false},        ]
                        },
];
const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}
    function showQuestion(){

        resetState();

        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1 ;
questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

currentQuestion.answers.forEach(answer => { 
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectBtn = e.target;
        const isCorrect = selectBtn.dataset.correct === "true";
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
            }else {
                selectBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                               }
                               button.disabled = true;

            });
            nextButton.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = 'You scored  ' + score +' Out of ' + questions.length ;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else { 
        startQuiz();}
    });

    startQuiz();








