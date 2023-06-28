let EasyQuesttions = [
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "1",
        "difficulty": "einfach"
    },
    {
        "question2": "was ist 1 + 2?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "2",
        "difficulty": "einfach"
    },
    {
        "question3": "was ist 1 + 3?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "3",
        "difficulty": "einfach"
    },
    {
        "question4": "was ist 1 + 4?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "4",
        "difficulty": "einfach"
    },
    {
        "question5": "was ist 1 + 5?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "6",
        "answer4": "5",
        "rightAnswer": "3",
        "difficulty": "einfach"
    },
]

let x = 0;

function toggleEasyQuestion(b) {
    let questionCard = document.getElementById('questionCard');
    questionCard.style.top = '0px';
    let question = document.getElementById('question1');
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');
    question.innerHTML = b[x]['question1'];
    answer1.innerHTML = b[x]['answer1'];
    answer2.innerHTML = b[x]['answer2'];
    answer3.innerHTML = b[x]['answer3'];
    answer4.innerHTML = b[x]['answer4'];
}

function checkAnswer(id) {
    let answer = document.getElementById(`answer${id}`);
    let rightAnswerId = EasyQuesttions[x]['rightAnswer'];
    let rightAnswer = document.getElementById(`answer${rightAnswerId}`);
    let next = document.getElementById('nextButton');
    if (next.disabled == true) {
        if (answer == rightAnswer) {
            answer.classList.add('success');
        }
        else {
            rightAnswer.classList.add('success');
            answer.classList.add('wrong');
        }
    }
    
    next.disabled = false;
}

function toggleNextQuestion() {
    x++;
    let question = document.getElementById(`question1`);
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');
    question.innerHTML = EasyQuesttions[x][`question${x + 1}`];
    answer1.innerHTML = EasyQuesttions[x]['answer1'];
    answer2.innerHTML = EasyQuesttions[x]['answer2'];
    answer3.innerHTML = EasyQuesttions[x]['answer3'];
    answer4.innerHTML = EasyQuesttions[x]['answer4'];
    answer1.classList.remove('success');
    answer1.classList.remove('wrong');
    answer2.classList.remove('success');
    answer2.classList.remove('wrong');
    answer3.classList.remove('success');
    answer3.classList.remove('wrong');
    answer4.classList.remove('success');
    answer4.classList.remove('wrong');
    let next = document.getElementById('nextButton');
    next.disabled = true;
}