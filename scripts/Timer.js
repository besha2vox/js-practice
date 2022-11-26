export class Timer {
    constructor({ selector, targetDate }) {
        this.date = targetDate;
        this.timer = document.querySelector(selector);
        this.updateTimer();
    }

    pad(prop) {
        return String(prop).padStart(2, '0');
    }

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(
            Math.floor((((ms % day) % hour) % minute) / second)
        );
        return { days, hours, minutes, seconds };
    }

    updateTimer() {
        const values = this.timer.querySelectorAll('.value');

        setInterval(() => {
            const ms = this.date - Date.now();
            const { days, hours, minutes, seconds } = this.convertMs(ms);
            [...values].map((value) => {
                switch (value.dataset.value) {
                    case 'days':
                        value.textContent = days;
                        break;

                    case 'hours':
                        value.textContent = hours;
                        break;

                    case 'mins':
                        value.textContent = minutes;
                        break;

                    case 'secs':
                        value.textContent = seconds;
                        break;
                }
            });
        }, 1000);
    }
}
