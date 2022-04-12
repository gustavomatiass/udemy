let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

let Guess = {
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
    
    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor')
        return;
    };
    updateAttempt(attempt, ++ Guess.attemptsNumber)

    if(numberdrawn == kick) {
        playAgain();
        status.innerHTML('parabens vc acentou')
        result.style.transition = '0,4s';
        result.style.backgroundColor = 'green'
        result.style.color = '#fff'
        status.style.color = '#fff'
        clear();
    }else if (numberdrawn > kick){
        status.innerHTML = 'o numero é maior'
        status.style.color = 'red'
        clear();
    }else if(numberdrawn < kick){
        status.innerHTML = 'o numero é menor'
        status.style.color = 'red'
        clear();
    }
};

function playAgain(){
    document.getElementById('btnstart').style.display = 'flex';
};

function restart(){
    document.location.reload(true)
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}