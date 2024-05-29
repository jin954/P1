document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-pomodoro');
    const resetButton = document.getElementById('reset-pomodoro');
    const settingsButton = document.getElementById('open-settings');
    const setPomodoroButton = document.getElementById('set-pomodoro');
    const pomodoroMinutesInput = document.getElementById('pomodoro-minutes');
    const shortBreakMinutesInput = document.getElementById('short-break-minutes');
    const longBreakMinutesInput = document.getElementById('long-break-minutes');
    const backgroundColorSelect = document.getElementById('background-color');

    // Load settings from localStorage
    loadSettings();

    startButton.addEventListener('click', startPomodoro);
    resetButton.addEventListener('click', resetPomodoro);
    settingsButton.addEventListener('click', toggleSettings);
    setPomodoroButton.addEventListener('click', setPomodoroSettings);

    function startPomodoro() {
        // Pomodoro start logic
        console.log("Pomodoro started");
    }

    function resetPomodoro() {
        // Pomodoro reset logic
        console.log("Pomodoro reset");
    }

    function toggleSettings() {
        const settings = document.getElementById('settings');
        settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
    }

    function setPomodoroSettings() {
        const pomodoroMinutes = pomodoroMinutesInput.value;
        const shortBreakMinutes = shortBreakMinutesInput.value;
        const longBreakMinutes = longBreakMinutesInput.value;
        const backgroundColor = backgroundColorSelect.value;

        // Save settings to localStorage
        localStorage.setItem('pomodoroMinutes', pomodoroMinutes);
        localStorage.setItem('shortBreakMinutes', shortBreakMinutes);
        localStorage.setItem('longBreakMinutes', longBreakMinutes);
        localStorage.setItem('backgroundColor', backgroundColor);

        // Update the timer display with new settings
        document.getElementById('timer').textContent = `${pomodoroMinutes}:00`;

        // Update the background color
        document.body.style.backgroundColor = backgroundColor;

        toggleSettings();
    }

    function loadSettings() {
        const pomodoroMinutes = localStorage.getItem('pomodoroMinutes') || 25;
        const shortBreakMinutes = localStorage.getItem('shortBreakMinutes') || 5;
        const longBreakMinutes = localStorage.getItem('longBreakMinutes') || 15;
        const backgroundColor = localStorage.getItem('backgroundColor') || '#1a1a2e';

        pomodoroMinutesInput.value = pomodoroMinutes;
        shortBreakMinutesInput.value = shortBreakMinutes;
        longBreakMinutesInput.value = longBreakMinutes;
        backgroundColorSelect.value = backgroundColor;

        // Set the timer display to the loaded pomodoro time
        document.getElementById('timer').textContent = `${pomodoroMinutes}:00`;

        // Set the background color
        document.body.style.backgroundColor = backgroundColor;
    }
});
