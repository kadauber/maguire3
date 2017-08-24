export class WeeklyTimesController implements angular.IController {
    public weekData: IDayData[];

    constructor() {}

    public getWeekTotal = (): number => {
        return this.weekData.map(day => day.totalTime)
                            .reduce((amt1, amt2) => amt1 + amt2);
    }

    public getRegularTotal = (): number => {
        return this.weekData.map(day => day.regularTime)
                            .reduce((amt1, amt2) => amt1 + amt2);
    }

    public getOvertimeTotal = (): number => {
        return this.weekData.map(day => day.overtime)
                            .reduce((amt1, amt2) => amt1 + amt2);
    }
}