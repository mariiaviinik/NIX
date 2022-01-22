const myQuestions = [
    {
        question: "What will be 10 / 2 ?",
        answers: {
          1: "3",
          2: "5",
          3: "7",
          4: "6",
        },
        correctAnswer: "2"
    },
    {
        question: "What is the name of the actor who played Jack in Titanic?",
        answers: {
            1: "Leonardo DiCaprio",
            2: "Brad Pitt",
            3: "Johnny Depp",
            4: "Tom Holland",
        },
        correctAnswer: "1"
    },
    {
      question: "What does the referee show the player when giving a warning?",
      answers: {
        1: "Passport",
        2: "Yellow card",
        3: "Bulletin",
        4: "Tongue",
      },
      correctAnswer: "2"
    },
    {
        question: "what is the capital of Great Britain?",
        answers: {
            1: "Berlin",
            2: "Kyiv",
            3: "London",
            4: "Rome"
        },
        correctAnswer: "3"
    },
    {
        question: "What vegetable is known to help you see in the dark?",
        answers: {
            1: "Carrot",
            2: "Cucumber",
            3: "Broccoli",
            4: "Cabbage",
        },
        correctAnswer: "1"
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answers: {
            1: "Jane Austen",
            2: "Oscar Wilde",
            3: "J.K. Rowling",
            4: "Louisa May Alcott",
        },
        correctAnswer: "3"
    },
    {
        question: "Which house was Harry Potter almost sorted into?",
        answers: {
            1: "Gryffindor",
            2: "Slytherin",
            3: "Hufflepuff",
            4: "Ravenclaw",
        },
        correctAnswer: "2"
    },
    {
        question: "Who wrote the classic horror book 'It'?",
        answers: {
            1: "Stephen King",
            2: "Charles Dickens",
            3: "Victor-Marie Hugo",
            4: "George Orwell",
        },
        correctAnswer: "1"
    },
    {
        question: "What is the name of Shakespeare’s shortest tragedy?",
        answers: {
            1: "Othello",
            2: "Macbeth",
            3: "King Lear",
            4: "Hamlet",
        },
        correctAnswer: "2"
    },
    {
        question: "What is the name of the author who wrote The Great Gatsby?",
        answers: {
            1: "Jack London",
            2: "Ray Bradbury",
            3: "Mark Twain",
            4: "F. Scott Fitzgerald",
        },
        correctAnswer: "4"
    },
    {
        question: "How many bones are there in the human body?",
        answers: {
            1: "103",
            2: "308",
            3: "355",
            4: "209",
        },
        correctAnswer: "4"
    },
    {
        question: "Which country gifted the Statue of Liberty to the US?",
        answers: {
            1: "Italy",
            2: "Germany",
            3: "France",
            4: "Georgia",
        },
        correctAnswer: "3"
    },
    {
        question: "What is the name of our Galaxy?",
        answers: {
            1: "Hoag's Object",
            2: "Malin 1",
            3: "Eye of Sauron",
            4: "Milky Way",
        },
        correctAnswer: "4"
    },
    {
        question: "Which U.S. State is the largest?",
        answers: {
            1: "Alaska",
            2: "Washington",
            3: "California",
            4: "Virginia",
        },
        correctAnswer: "1"
    },
    {
        question: "In what year was the first iPhone released?",
        answers: {
            1: "2004",
            2: "2005",
            3: "2006",
            4: "2007",
        },
        correctAnswer: "4"
    },
];

let question = document.body.querySelector(".question-container");
let answersLi = document.body.querySelectorAll(".answer");
let levels = document.body.querySelectorAll(".level");
let callFrienBtn = document.body.querySelector(".call-fiend ");
let hintBtn = document.body.querySelector(".hint");
let mainContainer = document.body.querySelector(".main-container");
let index;
let seconds;
let intervalId;
let currentAnswer;
let notCorrectindexes = [];
let points = [0];

answersLi.forEach(answer => {
    answer.addEventListener("click", (e) => {
        let value = e.target.value;
        currentAnswer = isCorrect(value, currentQuestion);

        if(currentAnswer){

            if(Object.keys(myQuestions).length - 1 === index) gameOver();

            if(index === 4 || index === 9) points.push(index);

            index++;
            currentQuestion = myQuestions[index];

            appendQuestion(currentQuestion);
            clearInterval(intervalId);
            setTimer();
        } else{
            gameOver();
        }
    });
});

hintBtn.addEventListener("click", () => {
    notCorrectindexes = hintHelper(currentQuestion.correctAnswer);

    hintBtn.classList.add("hidden");
    answersLi[notCorrectindexes[0]].classList.add("invisible");
    answersLi[notCorrectindexes[1]].classList.add("invisible");
});

callFrienBtn.addEventListener("click", () => {
    let [first, second] = hintHelper(random(3));

    callFrienBtn.classList.add("hidden");
    alert(`I think the correct answer is ${currentQuestion.answers[++first]} or ${currentQuestion.answers[++second]}`);
});

function hintHelper(correctAnswer){
    let randomFirst = random(3);
	let randomSecond = random(3);
    let correctIndex = correctAnswer - 1;

	while (randomFirst === correctIndex) {
		randomFirst = random(3);
	}

	while (randomSecond === randomFirst || randomSecond === correctIndex) {
		randomSecond = random(3);
    }

    return [randomFirst, randomSecond];
}

function random(max){
    return Math.floor(Math.random() * (max + 1));
}

function startGame(){
    index = 0;
    currentQuestion = myQuestions[index];

    mainContainer.classList.remove("hidden");
    start.classList.add("hidden");
    end.classList.add("hidden");
    hintBtn.classList.remove("hidden");
    callFrienBtn.classList.remove("hidden");

    appendQuestion(currentQuestion);
    setTimer();    
}

function appendQuestion(obj){
    question.innerText = obj.question;
    
    for(let i=0; i<answersLi.length; i++){
        answersLi[i].innerText = obj.answers[i+1];
    }

    if(index > 0){
        levels[index-1].classList.remove("orange");
    }
    levels[index].classList.add("orange");

    if(hintBtn.classList.contains("hidden")){
        answersLi[notCorrectindexes[0]].classList.remove("invisible");
        answersLi[notCorrectindexes[1]].classList.remove("invisible");
    }
}

function isCorrect(answer, obj){
    return answer === +obj.correctAnswer; 
}

function gameOver(){
    clearInterval(intervalId);
    let point = points.pop();

    if(currentAnswer){
        result.innerText = `YOU WIN ${levels[index].innerText}`;
    } else if(point){
        result.innerText = `YOU WIN ${levels[point].innerText}`;
    }else{
        result.innerText = `YOU LOSE`;
    }

    mainContainer.classList.add("hidden");
    levels[index].classList.remove("orange");
    end.classList.remove("hidden");
}

function setTimer(){
    seconds = 40;
	intervalId = setInterval(() => {
		if (seconds === 0) {
            clearInterval(intervalId);
			gameOver();
		}
		timer.innerText = seconds;
        seconds--;
	}, 1000);
};