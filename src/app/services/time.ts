export class Time {
    days: number = 0;
    hour: number = 0;
    minute: number = 0;
    seconds: number = 0;
    milliSeconds: number = 0;
    totalMilliSeconds: number = 0;

    constructor(days: number = 0, hour: number = 0, minute: number = 0, seconds: number = 0, milliSeconds: number = 0) {
        this.days = days
        this.hour = hour
        this.minute = minute
        this.seconds = seconds
        this.milliSeconds = milliSeconds
        this.totalMilliSeconds = this.calcTotalMilliSeconds()
    }

    private calcTotalMilliSeconds(): number {
        let tms = 0
        tms += this.milliSeconds
        tms += this.seconds * 1000
        tms += this.minute * (1000 * 60)
        tms += this.hour * (1000 * 3600)
        tms += this.days * (1000 * 3600 * 24)

        return tms
    }

    public fromTotalMilliSeconds(tms: number): Time {
        let days = Math.floor(tms / (1000 * 3600 * 24))
        tms -= days * (1000 * 3600 * 24)

        let hour = Math.floor(tms / 1000 / 60 / 60)
        tms -= hour * (1000 * 60 * 60)

        let minute = Math.floor(tms / 1000 / 60)
        tms -= minute * (1000 * 60)

        let seconds = Math.floor(tms / 1000)
        tms -= seconds * 1000

        return new Time(days, hour, minute, seconds, tms)
    }

    public toJSON() {
        return {'days': this.days, 'hours': this.hour, 'minutes': this.minute, 'seconds': this.seconds, 'milliSeconds': this.milliSeconds}
    }

    public toString() {
        return `${this.days} days, ${this.hour} hours, ${this.minute} minutes, ${this.seconds} seconds, ${this.milliSeconds} milli-seconds`
    }
}