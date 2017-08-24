import * as angular from 'angular';
import 'angular-ui-bootstrap';

export let app = angular.module('app', ['ui.bootstrap']);

// Constants
app.constant('standardTimeFormat', 'YYYY-MM-DD hh:mma');

// Maguire
import {MaguireApiService} from './maguire-api.service';
import {MaguireService} from './maguire.service';
import {MaguireController} from './maguire.controller';
app.service('MaguireApiService', MaguireApiService);
app.service('maguireService', MaguireService);
app.controller('MaguireController', MaguireController);

// Weekly times component
import {WeeklyTimesController} from './weekly-times/weekly-times.controller';
import {WeeklyTimesComponent} from './weekly-times/weekly-times.component';
app.controller('WeeklyTimesController', WeeklyTimesController);
app.component('weeklyTimes', new WeeklyTimesComponent());

// Daily times component
import {DailyTimesController} from './daily-times/daily-times.controller';
import {DailyTimesComponent} from './daily-times/daily-times.component';
app.controller('DailyTimesController', DailyTimesController);
app.component('dailyTimes', new DailyTimesComponent());

// Bootstrap the angular app module
angular.bootstrap(document.documentElement, ['app']);