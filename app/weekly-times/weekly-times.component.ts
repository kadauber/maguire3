export class WeeklyTimesComponent implements angular.IComponentOptions {
    public templateUrl = 'app/weekly-times/weekly-times.html';
    public controller = "WeeklyTimesController";
    public controllerAs = "wtCtrl";
    public bindings = {
        weekData: '<'
    }
}