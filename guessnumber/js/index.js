const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit(e));

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberdrawn: function randowValue() {
        return Math.round(Math.random() * this.max);
    }
}

let numberdrawn = Guess.numberdrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'tantativa: ' + value
    
};

function handleSubmit(e) {
    e.preventDefoult();

    
};

function playAgain(){
    document.getElementById('btnstart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}