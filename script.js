document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-pomodoro');
    const resetButton = document.getElementById('reset-pomodoro');
    const settingsButton = document.getElementById('open-settings');
    const setPomodoroButton = document.getElementById('set-pomodoro');
    const pomodoroModeButton = document.getElementById('pomodoro-mode');
    const shortBreakModeButton = document.getElementById('short-break-mode');
    const longBreakModeButton = document.getElementById('long-break-mode');
    const pomodoroMinutesInput = document.getElementById('pomodoro-minutes');
    const shortBreakMinutesInput = document.getElementById('short-break-minutes');
    const longBreakMinutesInput = document.getElementById('long-break-minutes');

    // Load settings from localStorage
    loadSettings();

    startButton.addEventListener('click', startPomodoro);
    resetButton.addEventListener('click', resetPomodoro);
    settingsButton.addEventListener('click', toggleSettings);
    setPomodoroButton.addEventListener('click', setPomodoroSettings);
    pomodoroModeButton.addEventListener('click', () => setMode('pomodoro'));
    shortBreakModeButton.addEventListener('click', () => setMode('short-break'));
    longBreakModeButton.addEventListener('click', () => setMode('long-break'));

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

        // Save settings to localStorage
        localStorage.setItem('pomodoroMinutes', pomodoroMinutes);
        localStorage.setItem('shortBreakMinutes', shortBreakMinutes);
        localStorage.setItem('longBreakMinutes', longBreakMinutes);

        // Update the timer display with new settings
        document.getElementById('timer').textContent = `${pomodoroMinutes}:00`;

        toggleSettings();
    }

    function loadSettings() {
        const pomodoroMinutes = localStorage.getItem('pomodoroMinutes') || 25;
        const shortBreakMinutes = localStorage.getItem('shortBreakMinutes') || 5;
        const longBreakMinutes = localStorage.getItem('longBreakMinutes') || 15;

        pomodoroMinutesInput.value = pomodoroMinutes;
        shortBreakMinutesInput.value = shortBreakMinutes;
        longBreakMinutesInput.value = longBreakMinutes;

        // Set the timer display to the loaded pomodoro time
        document.getElementById('timer').textContent = `${pomodoroMinutes}:00`;
    }

    function setMode(mode) {
        // Remove active class from all buttons
        document.querySelectorAll('.buttons button').forEach(button => button.classList.remove('active'));

        // Add active class to the clicked button
        if (mode === 'pomodoro') {
            pomodoroModeButton.classList.add('active');
            document.getElementById('timer').textContent = `${pomodoroMinutesInput.value}:00`;
        } else if (mode === 'short-break') {
            shortBreakModeButton.classList.add('active');
            document.getElementById('timer').textContent = `${shortBreakMinutesInput.value}:00`;
        } else if (mode === 'long-break') {
            longBreakModeButton.classList.add('active');
            document.getElementById('timer').textContent = `${longBreakMinutesInput.value}:00`;
        }
    }
});
