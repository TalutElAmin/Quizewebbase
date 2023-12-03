const questions= [
    {
        question: "Which of following is current VC of BUK ?",
        answers: [
            {text: "Dr Abba Jibril", correct: false},
            {text: "Prof Adamu Adamu", correct: false},
            {text: "Engr Lukman", correct: false},
            {text: "Prof Sagir Adamu Abass", correct: true},
        ]
        },
        {
            question: "In what year faculty of computing in BUK was established",
            answers: [
                {text: "1990", correct: false},
                {text: "2012", correct: false},
                {text: "2010", correct: true},
                {text: "2000", correct: false},
            ]
            },

        {
            question: "Which of the following is currently faculty HOD",
            answers: [
                {text: "Prof Yahuza", correct: false},
                {text: "Dr Ibrahim Alhaji Lawal", correct: true},
                {text: "Dr Ambruse", correct: false},
                {text: "Dr Habibat Kakudi", correct: false},
            ]
            },
            {
        question: "Faculty of computing in BUK comprises of_____________ departments ",
        answers: [
            {text: "Blockchain, Cloud, Media Study and statistics", correct: false},
            {text: "DBMS, Telecommunication, Networking and Tester", correct: false},
            {text: "Software Engineering, IT, CyberSecurity and Computer Science", correct: true},
            {text: "FrontEnd, Backend, Fullstack and DevOps", correct: false},
        ]
        }, 
    
        {
        question: "How many faculties are in BUK",
        answers: [
                {text: "40", correct: false},
                {text: "50", correct: false},
                {text: "17", correct: true},
                {text: "70", correct: false},
            ]
            }, 
            {
                question: "Which of the technologies involve in frontEnd development",
                answers: [
                    {text: "HTML CSS JAVASCRIPT", correct: true},
                    {text: "Php and Django", correct: false},
                    {text: "Typscript", correct: false},
                    {text: "Adobe Illustrator", correct: false},
                ]
                },
                {
                    question: "Which of the technologies are use for Backend development",
                    answers: [
                        {text: "NodeJs/Django,", correct: true},
                        {text: "ReactJs/tailwind ", correct: false},
                        {text: "MsExcel", correct: false},
                        {text: "JustInMind", correct: false},
                    ]
                    },   
            {
                question: "What the term algorithm means____________",
                answers: [
                    {text: "Series of step follow to solve a given problem or accomplished a task", correct: true},
                    {text: "Series of codes that is difficult to understand", correct: false},
                    {text: "A code represent that involve itration of statement", correct: false},
                    {text: "Hierachical represenation of codes", correct: false},
                ]
                },
                {
                    question: "What does the term Flowchart means_____________",
                    answers: [
                        {text: "Hierachical represenation of parse tree", correct: false},
                        {text: "Diagramatical represent of chart", correct: false},
                        {text: "Diagramatical representation of algorithm aproach to solving a task", correct: true},
                        {text: "Illustration of left derivation parse tree", correct: false},
                    ]
                    },
    {
        question: "which of the following is fastest and iterative methodology for software development",
        answers: [
            {text: "Agile", correct: true},
            {text: "Extreme programming", correct: false},
            {text: "DevOp", correct: false},
            {text: "WaterFall model", correct: false},
        ]  
    },
    {
        question: "which among is longest phase in SDLC",
        answers: [
            {text: "Requirement Gathering", correct: false},
            {text: "Implementation", correct: true},
            {text: "CleanCode service", correct: false},
            {text: "Maintainance", correct: false},
        ]
    },
    {
        question: "Project manager is responsible for_____________",
        answers: [
            {text: "Intellectual property", correct: false},
            {text: "beta testing and acceptance testing", correct: false},
            {text: "planning and coordinating the process of software develoment to ensure high quality of software product", correct: true},
            {text: "agile development", correct: false},
        ]
        },
    {
        question: "Which of the following is the first approach in SDLC",
        answers: [
            {text: "Design and coding", correct: false},
            {text: "Planning and Requirment gathering", correct: true},
            {text: "Beta testing", correct: false},
            {text: "Deployment", correct: false},
        ]
    },
    {
        question: "What are main types of software testing",
        answers: [
            {text: "component testing", correct: false},
            {text: "Interface testing", correct: false},
            {text: "Functional and Non functional testing", correct: true},
            {text: "Scrum testing", correct: false},
        ]
        },
    {
        question: "which of the following is High Level language?",
        answers: [
            {text: "Wordpress", correct: false},
            {text: "Php", correct: true},
            {text: "Adobe xD", correct: false},
            {text: "Wireframe", correct: false},
        ]
    },
    {
        question: "which of the following is an operating system?",
        answers: [
            {text: "Dell", correct: false},
            {text: "Windows Xp", correct: true},
            {text: "Yahoo", correct: false},
            {text: "Microsoft", correct: false},
        ]
    },
    {
        question: "which of the following computer language is written in binary form?",
        answers: [
            {text: "Java", correct: false},
            {text: "C#", correct: false},
            {text: "Pascal", correct: false},
            {text: "Machine language", correct: true},
        ]
    },
    {
        question: "which of the following is not related to Computer?",
        answers: [
            {text: "Accuracy", correct: false},
            {text: "Speed", correct: false},
            {text: "Consistency", correct: false},
            {text: "Thinking", correct: true},
        ]
    },
    {
        question: "The term pentium is related to which of the following computer parts?",
        answers: [
            {text: "RAM", correct: false},
            {text: "Microprocessor", correct: true},
            {text: "HDD", correct: false},
            {text: "Non of the above", correct: false},
        ]
    },
    {
        question: "What is meant by GUI in computer?",
        answers: [
            {text: "Graphic Unique interface", correct: false},
            {text: "Graph user interface", correct: false},
            {text: "Graphical User Interface", correct: true},
            {text: "Graphical universal interface", correct: false},
        ]
    },
    {
        question: "The process of improving the source code without changing the behavior of software is refer to as_______________?",
        answers: [
            {text: "Refactoring", correct: true},
            {text: "CleanCode", correct: false},
            {text: "Scrum", correct: false},
            {text: "pair Programming", correct: false},
        ]
    },
    {
        question: "Process of modifying and taking proper care of software developed after delivering is refer to _____________________?",
        answers: [
            {text: "Product management", correct: false},
            {text: "Stakeholder Maintenance", correct: false},
            {text: "Software Maintenance", correct: true},
            {text: "Beta testing", correct: false},
        ]
    },
    {
        question: "what converts an entire program into machine language?",
        answers: [
            {text: "Mouse", correct: false},
            {text: "Compiler", correct: true},
            {text: "Electrons", correct: false},
            {text: "Keyboard", correct: false},
        ]
    },
    {
        question: "First page of website is termed as ______?",
        answers: [
            {text: "Homepage", correct: true},
            {text: "Electronic page", correct: false},
            {text: "FrontEnd", correct: false},
            {text: "BackEnd", correct: false},
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("button-answer");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


    function resetState(){
        nextButton.style.display="none"
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }

    }
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect= selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`you scored ${score} out of 
        ${questions.length}!`;
        nextButton.innerHTML="Play again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex  < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    
    
    startQuiz();