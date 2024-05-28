document.addEventListener('DOMContentLoaded', () => {
    let pomodoroInterval;
    let remainingTime = 25 * 60;
    let currentMode = 'pomodoro';

    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-pomodoro');
    const resetButton = document.getElementById('reset-pomodoro');
    const setButton = document.getElementById('set-pomodoro');
    const openSettingsButton = document.getElementById('open-settings');
    const settingsDiv = document.getElementById('settings');
    const pomodoroModeButton = document.getElementById('pomodoro-mode');
    const shortBreakModeButton = document.getElementById('short-break-mode');
    const longBreakModeButton = document.getElementById('long-break-mode');
    const minutesInputPomodoro = document.getElementById('pomodoro-minutes');
    const minutesInputShortBreak = document.getElementById('short-break-minutes');
    const minutesInputLongBreak = document.getElementById('long-break-minutes');

    function updatePomodoro() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (remainingTime > 0) {
            remainingTime--;
        } else {
            clearInterval(pomodoroInterval);
            alert('ポモドーロタイマーが終了しました!');
        }
    }

    startButton.addEventListener('click', () => {
        clearInterval(pomodoroInterval);
        pomodoroInterval = setInterval(updatePomodoro, 1000);
    });

    resetButton.addEventListener('click', () => {
        clearInterval(pomodoroInterval);
        if (currentMode === 'pomodoro') {
            remainingTime = parseInt(minutesInputPomodoro.value) * 60;
        } else if (currentMode === 'shortBreak') {
            remainingTime = parseInt(minutesInputShortBreak.value) * 60;
        } else if (currentMode === 'longBreak') {
            remainingTime = parseInt(minutesInputLongBreak.value) * 60;
        }
        updatePomodoro();
    });

    setButton.addEventListener('click', () => {
        settingsDiv.style.display = 'none';
        if (currentMode === 'pomodoro') {
            remainingTime = parseInt(minutesInputPomodoro.value) * 60;
        } else if (currentMode === 'shortBreak') {
            remainingTime = parseInt(minutesInputShortBreak.value) * 60;
        } else if (currentMode === 'longBreak') {
            remainingTime = parseInt(minutesInputLongBreak.value) * 60;
        }
        updatePomodoro();
    });

    openSettingsButton.addEventListener('click', () => {
        settingsDiv.style.display = settingsDiv.style.display === 'none' ? 'block' : 'none';
    });

    pomodoroModeButton.addEventListener('click', () => {
        currentMode = 'pomodoro';
        remainingTime = parseInt(minutesInputPomodoro.value) * 60;
        updateActiveButton(pomodoroModeButton);
        updatePomodoro();
    });

    shortBreakModeButton.addEventListener('click', () => {
        currentMode = 'shortBreak';
        remainingTime = parseInt(minutesInputShortBreak.value) * 60;
        updateActiveButton(shortBreakModeButton);
        updatePomodoro();
    });

    longBreakModeButton.addEventListener('click', () => {
        currentMode = 'longBreak';
        remainingTime = parseInt(minutesInputLongBreak.value) * 60;
        updateActiveButton(longBreakModeButton);
        updatePomodoro();
    });

    function updateActiveButton(activeButton) {
        document.querySelectorAll('#pomodoro .buttons button').forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    updatePomodoro();
});
