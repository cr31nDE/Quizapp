let EasyQuesttions = [
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "1"
    },
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
    },
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
    },
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
    },
    {
        "question1": "was ist 1 + 1?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
    },
]


function toggleEasyQuestion(){
    let questionCard = document.getElementById('questionCard');
    questionCard.style.top = '0px';
    let question = document.getElementById('question1');
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2'); 
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');
    question.innerHTML = EasyQuesttions[0]['question1'];
    answer1.innerHTML = EasyQuesttions[0]['answer1'];
    answer2.innerHTML = EasyQuesttions[0]['answer2'];
    answer3.innerHTML = EasyQuesttions[0]['answer3'];
    answer4.innerHTML = EasyQuesttions[0]['answer4'];
}

function checkAnswer(id){
    let answer = document.getElementById(`answer${id}`);
    let rightAnswerId = EasyQuesttions[0]['rightAnswer'];
    let rightAnswer = document.getElementById(`answer${rightAnswerId}`);
    if (answer == rightAnswer) {
        answer.style.backgroundColor = '#FFC107';
    }
    else{
        rightAnswer.style.backgroundColor = '#FFC107';
        answer.style.backgroundColor = 'darkgrey';
    }
}