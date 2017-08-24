import * as angular from 'angular';

interface ITimeDataResponse {
    data: ITimeData[],
    status: number,
    statusText: string
}

export class MaguireApiService {

    static import = ['$http'];

    constructor(private $http: angular.IHttpService) {}

    public GetAllTimeData(): angular.IPromise<ITimeDataResponse> {
        return this.$http.get("https://maguire.firebaseio.com/timeData.json");
    }
}