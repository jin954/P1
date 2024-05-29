let pomodoroMinutes = 25;
let shortBreakMinutes = 5;
let longBreakMinutes = 15;
let timer;
let timerMode = 'pomodoro';
let timeRemaining = pomodoroMinutes * 60;

function updateTimerDisplay(minutes, seconds) {
    const timer = document.getElementById('timer');
    timer.innerHTML = `
        <span class="digit">${Math.floor(minutes / 10)}</span>
        <span class="digit">${minutes % 10}</span>
        <span class="colon">:</span>
        <span class="digit">${Math.floor(seconds / 10)}</span>
        <span class="digit">${seconds % 10}</span>
    `;
}

function startTimer() {
    const startButton = document.getElementById('start-pomodoro');
    startButton.disabled = true;
    timer = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        updateTimerDisplay(minutes, seconds);

        if (timeRemaining <= 0) {
            clearInterval(timer);
            startButton.disabled = false;
            alert(`${timerMode === 'pomodoro' ? 'Pomodoro' : timerMode === 'shortBreak' ? 'Short Break' : 'Long Break'} session ended!`);
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    const startButton = document.getElementById('start-pomodoro');
    startButton.disabled = false;
    if (timerMode === 'pomodoro') {
        timeRemaining = pomodoroMinutes * 60;
    } else if (timerMode === 'shortBreak') {
        timeRemaining = shortBreakMinutes * 60;
    } else if (timerMode === 'longBreak') {
        timeRemaining = longBreakMinutes * 60;
    }
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    updateTimerDisplay(minutes, seconds);
}

function setTimerMode(mode) {
    timerMode = mode;
    document.querySelectorAll('.buttons button').forEach(button => button.classList.remove('active'));
    document.getElementById(`${mode}-mode`).classList.add('active');
    resetTimer();
}

document.getElementById('start-pomodoro').addEventListener('click', startTimer);
document.getElementById('reset-pomodoro').addEventListener('click', resetTimer);
document.getElementById('open-settings').addEventListener('click', () => {
    document.getElementById('settings').style.display = 'block';
});
document.getElementById('set-pomodoro').addEventListener('click', () => {
    pomodoroMinutes = parseInt(document.getElementById('pomodoro-minutes').value);
    shortBreakMinutes = parseInt(document.getElementById('short-break-minutes').value);
    longBreakMinutes = parseInt(document.getElementById('long-break-minutes').value);
    document.getElementById('settings').style.display = 'none';
    resetTimer();
});

document.getElementById('pomodoro-mode').addEventListener('click', () => setTimerMode('pomodoro'));
document.getElementById('short-break-mode').addEventListener('click', () => setTimerMode('shortBreak'));
document.getElementById('long-break-mode').addEventListener('click', () => setTimerMode('longBreak'));

// Initialize timer display
resetTimer();
