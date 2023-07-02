let EasyQuestions = [
    {
        "question1": "Wie heißt der höchste Berg der Welt?",
        "answer1": "Alpen",
        "answer2": "Zugspitze",
        "answer3": "Annapurma",
        "answer4": "Mount Everest",
        "rightAnswer": "4",
        "difficulty": "easy"
    },
    {
        "question2": "Wie viele Flügel hat ein Schmetterling?",
        "answer1": "2",
        "answer2": "3",
        "answer3": "4",
        "answer4": "5",
        "rightAnswer": "3",
        "difficulty": "easy"
    },
    {
        "question3": "Wie heißt die Hauptstadt von Deutschland?",
        "answer1": "Berlin",
        "answer2": "Frankfurt",
        "answer3": "Wiesbaden",
        "answer4": "Hamburg",
        "rightAnswer": "1",
        "difficulty": "easy"
    },
    {
        "question4": "Wie viele Minten hat eine Stunde?",
        "answer1": "100",
        "answer2": "30",
        "answer3": "60",
        "answer4": "18",
        "rightAnswer": "3",
        "difficulty": "easy"
    },
    {
        "question5": "Auf welchem Kontintent liegt Deutschland?",
        "answer1": "Europa",
        "answer2": "Asien",
        "answer3": "Amerika",
        "answer4": "Afrka",
        "rightAnswer": "1",
        "difficulty": "easy"
    },
]

let MediumQuestions = [
    {
        "question1": "Das flächenmäßig kleinste Bundesland heißt?",
        "answer1": "Berlin",
        "answer2": "Hamburg",
        "answer3": "Saarland",
        "answer4": "Bremen",
        "rightAnswer": "4",
        "difficulty": "medium"
    },
    {
        "question2": "Was bedeutet das lateinische “carpe diem”?",
        "answer1": "Genieße das Leben",
        "answer2": "Nutze den Tag",
        "answer3": "Dein Tag wird toll werden",
        "answer4": "Man sieht sich immer zweimal im Leben",
        "rightAnswer": "2",
        "difficulty": "medium"
    },
    {
        "question3": "Was ist die “Goldene Himbeere”?",
        "answer1": "Eine Nachspeise aus Russland",
        "answer2": "Das teuerste Schmuckstück der Welt",
        "answer3": "Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres",
        "answer4": "Das Symbol einer Sekte",
        "rightAnswer": "3",
        "difficulty": "medium"
    },
    {
        "question4": "Welcher deutsche Herrscher trug den Beinamen “der Große”?",
        "answer1": "Friedrich der I. von Preußen",
        "answer2": "Friedrich der III. von Sachsen",
        "answer3": "Friedrich II. von Preußen",
        "answer4": "Friedrich der III. von Österreich",
        "rightAnswer": "3",
        "difficulty": "medium"
    },
    {
        "question5": "Welche Gürtelfarbe existiert nicht im Kampfsport Karate?",
        "answer1": "Schwarz",
        "answer2": "Weiß",
        "answer3": "Rot",
        "answer4": "Braun",
        "rightAnswer": "3",
        "difficulty": "medium"
    },
]

let HardQuestions = [
    {
        "question1": "Welcher Schweizer bekam 1901 den ersten Friedensnobelpreis?",
        "answer1": "Henry Dunant",
        "answer2": "Ernst Abbe",
        "answer3": "Antonio Abetti",
        "answer4": "Max Aub",
        "rightAnswer": "1",
        "difficulty": "hard"
    },
    {
        "question2": "Welche Farbe hat ein Regenbogen ganz außen (oben)?  ",
        "answer1": "rot",
        "answer2": "gelb",
        "answer3": "blau",
        "answer4": "grün",
        "rightAnswer": "1",
        "difficulty": "hard"
    },
    {
        "question3": "Wie lautet die Hauptstadt des US-Bundesstaates Alaska? ",
        "answer1": "Denver",
        "answer2": "Juneau",
        "answer3": "Atlanta",
        "answer4": "Frankfort",
        "rightAnswer": "2",
        "difficulty": "hard"
    },
    {
        "question4": 'Wer schrieb "Die Verwandlung"?',
        "answer1": "Johann Wolfgang von Goethe",
        "answer2": "Umberto Eoc",
        "answer3": "Franz Kafka",
        "answer4": "Friedrich Dürrenmatt",
        "rightAnswer": "3",
        "difficulty": "hard"
    },
    {
        "question5": "Welche Ordnungszahl hat Kupfer im Periodensystem der Elemente?",
        "answer1": "30",
        "answer2": "31",
        "answer3": "28",
        "answer4": "29",
        "rightAnswer": "4",
        "difficulty": "hard"
    },
]

let x = 0;
let correctAnswer = 0;

function toggleQuestion(b) {
    changeProgress();
    let questionCard = document.getElementById('questionCard');
    questionCard.style.top = '0px';
    let question = document.getElementById('question1');
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');
    let difficulty = document.getElementById('difficulty');
    question.innerHTML = b[x]['question1'];
    answer1.innerHTML = b[x]['answer1'];
    answer2.innerHTML = b[x]['answer2'];
    answer3.innerHTML = b[x]['answer3'];
    answer4.innerHTML = b[x]['answer4'];
    difficulty.innerHTML = b[x]['difficulty'];
}


function checkAnswer(id) {
    let answer = document.getElementById(`answer${id}`);
    let rightAnswerId = checkDifficulty()[x]['rightAnswer'];
    let rightAnswer = document.getElementById(`answer${rightAnswerId}`);
    let next = document.getElementById('nextButton');
    if (next.disabled == true) {
        if (answer == rightAnswer) {
            answer.classList.add('success');
            correctAnswer++;
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
    if (x <= checkDifficulty().length - 1) {
        let question = document.getElementById(`question1`);
        let answer1 = document.getElementById('answer1');
        let answer2 = document.getElementById('answer2');
        let answer3 = document.getElementById('answer3');
        let answer4 = document.getElementById('answer4');
        question.innerHTML = checkDifficulty()[x][`question${x + 1}`];
        answer1.innerHTML = checkDifficulty()[x]['answer1'];
        answer2.innerHTML = checkDifficulty()[x]['answer2'];
        answer3.innerHTML = checkDifficulty()[x]['answer3'];
        answer4.innerHTML = checkDifficulty()[x]['answer4'];
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
        changeProgress();
    }
    else {
        toggleEnd();
    }
}


function checkDifficulty() {
    let difficulty = document.getElementById('difficulty').innerHTML;
    if (difficulty == 'easy') {
        difficulty = EasyQuestions;
    }
    if (difficulty == 'medium') {
        difficulty = MediumQuestions;
    }
    if (difficulty == 'hard') {
        difficulty = HardQuestions;
    }
    return difficulty;
}


function toggleEnd() {
    let length = checkDifficulty().length;
    let img = document.getElementById('questionImg');
    img.src = "img/win.png";
    let body = document.getElementById('cardBody');
    body.innerHTML = '';
    body.innerHTML = `
    <div class="bodyEnd">Glückwunsch, du hast ${correctAnswer} von ${length} Fragen richtig beantwortet.
    <div class="btnRight">
        <button type="button" class="btnEnd btn btn-info" onclick="goToMenu()">Menü</button>
    </div>
    </div>`;
}


function goToMenu() {
    let endCard = document.getElementById('questionCard');
    x = 0;
    correctAnswer = 0;
    endCard.style.top = '-1000px';
    endCard.innerHTML = `
    <img id="questionImg" src="img/question.png">
    
    <div class="card-body background" id="cardBody">
        <p class="card-text" id="question1">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
           
        <div class="answerContainer">
            <div id="answer1" onclick="checkAnswer('1')" class="card marginBottomMinWidth ">
                <div class="card-body">
                  light
                </div>
              </div>
              <div id="answer2" onclick="checkAnswer('2')" class="card marginBottomMinWidth ">
                <div class="card-body">
                  light
                </div>
              </div>
              <div id="answer3" onclick="checkAnswer('3')" class="card marginBottomMinWidth ">
                <div class="card-body">
                  light
                </div>
              </div>
              <div id="answer4" onclick="checkAnswer('4')" class="card marginBottomMinWidth ">
                <div class="card-body">
                  light
                </div>
              </div>
        </div>
        <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="porgressColor progress-bar bg-success" id="progressBar" style="width: 75%"></div>
          </div>
        <div class="containerBottom">
            <div id="countQuestion">1/7</div>
            <span class=" difficulty badge rounded-pill text-bg-info" id="difficulty">easy</span>
            <button type="button" onclick="toggleNextQuestion()" id="nextButton" disabled class="nextBtn btn btn-warning">Next</button>
        </div>
    </div>`
}


function changeProgress(){
    let progress = document.getElementById('progressBar');
    let barLength = ((x+1)/checkDifficulty().length)*100;
    let progressCount = document.getElementById('countQuestion');
    progress.style.width = `${barLength}%`;
    progressCount.innerHTML = `
    <span>${x+1}/${checkDifficulty().length}</span>`
}