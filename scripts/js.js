import { Timer } from './Timer.js';

const timer1 = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Dec 29, 2022'),
});

const timer2 = new Timer({
    selector: '#timer-2',
    targetDate: new Date('May 09, 2023'),
});
