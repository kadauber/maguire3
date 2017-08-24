import {MaguireService} from './maguire.service';

export class MaguireController {
    static $inject = ['maguireService'];

    constructor(private maguireService: MaguireService) {}
    
    public title: string = "Maguire";
    public clockedIn: boolean = false;
    public lastClockedInTime: string;
    public lastClockedOutTime: string = "None";
    public currentTask: string;

    public weekData: IDayData[] = [
        {
            dayName: "Sunday",
            totalTime: 10.5,
            regularTime: 8,
            overtime: 2.5
        },
        {
            dayName: "Monday",
            totalTime: 10,
            regularTime: 8,
            overtime: 2
        }
    ];

    public dayData: ITimeData[] = [];

    public clockIn = (): void => {
        this.clockedIn = true;
        this.lastClockedInTime = this.maguireService.getCurrentTime();
    }

    public clockOut = (): void => {
        this.clockedIn = false;
        this.lastClockedOutTime = this.maguireService.getCurrentTime();
        this.dayData.push({
            task: this.currentTask,
            clockInTime: this.lastClockedInTime,
            clockOutTime: this.lastClockedOutTime
        });
    }
}