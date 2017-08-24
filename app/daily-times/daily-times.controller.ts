import {MaguireService} from '../maguire.service';
import {MaguireApiService} from '../maguire-api.service';

export class DailyTimesController implements angular.IController {
    static $inject = ['maguireService', 'MaguireApiService'];

    constructor (
        private maguireService: MaguireService,
        private MaguireApiService: MaguireApiService
    ) {
        this.MaguireApiService.GetAllTimeData().then(response => { 
            console.log(response);
            response.data.forEach(timeData => {
                this.dayData.push({
                    task: timeData.task,
                    clockInTime: timeData.clockInTime,
                    clockOutTime: timeData.clockOutTime
                });
            });
        });
    }

    public round: boolean = false;
    public dayData: ITimeData[];

    public getCumulativeTime = ($index: number): number => {
        return this.dayData.slice(0, $index + 1)
                            .map(timeData => this.maguireService.getTimeDifference(timeData.clockInTime, timeData.clockOutTime, this.round))
                            .reduce((diff1, diff2) => diff1 + diff2 );
    }

    public deleteTimeData = (idx: number): void => {
        this.dayData.splice(idx, 1);
    }
}