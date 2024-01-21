let questionIndex = 0; // da 1 a 10
let clockSeconds = 6; // valore a caso, possiamo lasciare un minuto o decidere di cambiare a seconda della difficoltà
let score = 0;       //incrementa ad ogni risposta corretta
const timeRange = 60;
// populateQuestion()

nextQuestion()
clock()

function nextQuestion() {
    if (questionIndex < questions.length) {

        clockSeconds = timeRange;
        // clock()
        populateQuestion()
        const buttons = document.querySelectorAll(".btn-answer");
        buttons.forEach((button)=>{
            button.addEventListener("click", ()=>{
                // console.log(event);
                console.log(button.textContent);
                controlAnswer(button.textContent);
                questionIndex++;
                console.log("questionIndex = " + questionIndex);
                // stopClock();
                nextQuestion();
                
            })
        })
    }
    else{
        showResults()
    }

}

function populateQuestion() {
    
    cleanWindow()
    cleanClock()
    // clock()
    const questionContainer = document.querySelector("#question-container");
    const questionTitle = document.createElement("h1");
    questionTitle.textContent = questions[questionIndex].question;
    questionContainer.append(questionTitle);

    populateBtns()
    // genere e popola 4 o 2 bottoni in base all'indice dell array questions
    counterQuestions()
}

function populateBtns(){
    let answerData = questions[questionIndex].incorrect_answers;
    answerData.push(questions[questionIndex].correct_answer)
    // console.log(answerData);
    const btnContainer = document.querySelector(".btn-container");

    const shuffledAnswer = shuffleAnswer(answerData);

    shuffledAnswer.forEach(answer => {
        const btn = document.createElement("button");
        btn.classList.add("btn-answer");
        btn.textContent = answer;
        btnContainer.append(btn);
    });
}

function counterQuestions (){
    const counterQuesions = document.querySelector(".count-question-container");
    const textCounterQuestions = document.createElement("p");
    textCounterQuestions.textContent = "QUESTION " + (questionIndex + 1) + "/" + questions.length;
    counterQuesions.append(textCounterQuestions); 
}

function shuffleAnswer(answerArray){
    return answerArray.sort(()=>Math.random()-0.5)
}

function controlAnswer(selectedAnswer){
    //controlla e aumenta score di uno in caso positivo
    if(selectedAnswer === questions[questionIndex].correct_answer){
        console.log("corretta");
        score ++;
        console.log("punteggio: " + score);
    } else{
        console.log("non corretta");
        console.log("punteggio: " + score);
    }
}

function cleanWindow() {
    //pulisce la pagina da elementi variabili
    const titleContainer = document.querySelector("#question-container");
    const answersContainer = document.querySelector("#answers-container");
    const counterQuesions = document.querySelector(".count-question-container");
    
    
    
    titleContainer.textContent = "";
    answersContainer.textContent = "";
    counterQuesions.textContent = "";
    

}

function cleanClock(){
    const clockText = document.querySelector(".clock-text");
    if(clockText){
        clockText.textContent = "";
    }
    // if(questionIndex === questions.length){
    //     const clockContainer = document.querySelector(".clock");
    //     clockContainer.textContent = "";
    // }
}

function clock() {  // scandisce solo il tempo usando la variabile globale clockSeconds
    //setInterval( ,1000);
    // clockSeconds = 6;
    const countdown = setInterval(() => {
        if (questionIndex === questions.length) {
            // console.log("prova");
            const clockContainer = document.querySelector(".clock");
            clockContainer.textContent = "";
            clearInterval(countdown)
            
        }    
        cleanClock()        
        clockSeconds --
        showClock()
        console.log(clockSeconds);
        
        if (clockSeconds === 0){
            
            // clearInterval(countdown);
            questionIndex++;
            console.log("questionIndex = " + questionIndex);
            clockSeconds = timeRange;
            nextQuestion()
    }}, 1000);
    // console.log("punteggio: " + score);
}

function showClock(){
    const clockContainer = document.querySelector(".clock");
    const clockText = document.querySelector(".clock-text");
    const seconds = document.createElement("p");
    const timerClock = document.createElement("p");
    timerClock.classList.add("timer-clock");
    const remaining = document.createElement("p");

    seconds.textContent = "SECONDS";
    timerClock.textContent = clockSeconds;
    timerClock.classList.add("clock-big-text");
    remaining.textContent = "REMAINING";

        if (clockText) {
        clockContainer.append(clockText);
        clockText.append(seconds, timerClock, remaining);
    }
}

function showResults() {
    cleanWindow()
    // const clockContainer = document.querySelector(".clock");
    // clockContainer.remove();
    // elimina gli elementi popolati da populateQuestion e genere un output html con score
    const mainContainer = document.querySelector("#bigger-container");
    const circle = document.createElement("div");
    const resultsContainer = document.createElement("div");
    const resultsTitle = document.createElement("h2");
    const resultsText = document.createElement("p");
    resultsContainer.classList.add("results-container");

    resultsTitle.innerHTML = "Result";
    resultsTitle.classList.add("subtitle");
    resultsText.innerHTML ="Your score is: " + score + "/" + questions.length;
    resultsText.classList.add("results-text")

    mainContainer.append(circle);
    circle.append(resultsContainer);
    resultsContainer.append(resultsTitle);
    resultsContainer.append(resultsText);
}


