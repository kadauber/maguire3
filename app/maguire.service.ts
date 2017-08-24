import moment from 'moment';

export class MaguireService {

    static $inject = ['standardTimeFormat'];

    constructor (private standardTimeFormat: string) {}

    public getTimeDifference = (t1: string, t2: string, rounded?: boolean): number => {
        let m1 = this.stringToMoment(t1);
        let m2 = this.stringToMoment(t2);
        let diff = m2.diff(m1, 'hours', true);
        if (rounded) {
            // round to the nearest fifteen minutes
            return Math.round(diff * 4) / 4;
        } else {
            return diff;
        }
    }

    public getCurrentTime = (): string => {
        return this.momentToString(moment());
    }

    private momentToString = (m: moment.Moment): string => {
        return m.format(this.standardTimeFormat);
    }

    private stringToMoment = (t: string): moment.Moment => {
        return moment(t, this.standardTimeFormat);
    }
}