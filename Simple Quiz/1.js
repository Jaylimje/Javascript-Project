const questions = [{
    question: "Which is largest animal in the world?",
    answers:[
        {text: "Shark", correct : false},
        {text: "Blue whale", correct : false},
        {text: "Elephant", correct : true},
        {text: "Giraffe", correct : false},
    ]
},{
    question: "Which is smallest country in the world?",
    answers:[
        {text: "Vatican City", correct : true},
        {text: "Bhutan", correct : false},
        {text: "Nepal", correct : false},
        {text: "Shri Lanka", correct : false},
    ]
},{
    question: "Which is largest desert in the world?",
    answers:[
        {text: "kalahari", correct : false},
        {text: "Gobi", correct : false},
        {text: "Sahara", correct : false},
        {text: "Antarctica", correct : true},
    ]
},{
    question: "Which is smallest continent in the world?",
    answers:[
        {text: "Asia", correct : false},
        {text: "Australia", correct : true},
        {text: "Arctic", correct : false},
        {text: "Africa", correct : false},
    ]
},
]

const queelement = document.getElementById("que");
const Answer = document.getElementById("answer-btn");
const nextbtn = document.getElementsByClassName("next");
const backbtn = document.getElementsByClassName("back");

let currentqueIndex = 0;
let score = 0;

function startQuiz(){
    currentqueIndex = 0
    score = 0
    backbtn.innerHTML = "<";
    nextbtn.innerHTML = ">";
    ShowQuiz()
}

function ShowQuiz(){
    resetState()
    let currentque = questions[currentqueIndex];
    let QueNo = currentqueIndex + 1;
    queelement.innerHTML = QueNo + ". " + currentque.question

    currentque.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        Answer.appendChild(button)

        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectanswer)
    })
}

function resetState(){
    // nextbtn.style.display = "none"
    while(Answer.firstChild){
        Answer.removeChild(Answer.firstChild)
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(Answer.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextbtn.style.display = "block"
}

function handleQuestion(){
    currentqueIndex++;
    if(currentqueIndex < questions.length){
        ShowQuiz()
    }
    else{
        showScore()
    }
}

function showScore(){
    // resetState()
    queelement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block"
}

nextbtn.addEventListener("click", ()=>{
    if(currentqueIndex < questions.length){
        handleQuestion()
    }
    else{
        startQuiz()
    }
})

startQuiz()