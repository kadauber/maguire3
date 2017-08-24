export class DailyTimesComponent implements angular.IComponentOptions {
    public templateUrl = 'app/daily-times/daily-times.html';
    public controller = 'DailyTimesController';
    public controllerAs = 'dtCtrl';
    public bindings = {
        dayData: '<'
    }
}