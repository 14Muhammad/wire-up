import { Component }   from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import {MdButton} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MdInput} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MD_RADIO_DIRECTIVES, MdRadioGroup} from "@angular2-material/radio/radio";
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: [],
    directives:[MdButton, MD_CARD_DIRECTIVES, MdInput, MdToolbar
        ,MD_RADIO_DIRECTIVES, MdRadioGroup,CHART_DIRECTIVES],
    providers:[]
})
export class DashboardComponent {
    constructor(public authService: AuthService, public router: Router) {
        if (!this.authService.isLoggedIn)
            this.router.navigate(['/login']);
        this.options = {
            title: {text: 'Progress Chart'},
            series: [{
                name: 's1',
                data: [2, 3, 5, 8, 13],
                allowPointSelect: true
            }, {
                name: 's2',
                data: [-2, -3, -5, -8, -13],
                allowPointSelect: true
            }]
        };
    }
        options: Object;
        chart:Object;

        saveChart(chart) {
            this.chart = chart;
        }
        addPoint() {
            //this.chart.series[0].addPoint(Math.random() * 10);
            //this.chart.series[1].addPoint(Math.random() * -10);
        }
        onPointSelect(point) {
            alert(`${point.y} is selected`);
        }
        onSeriesHide(series) {
            alert(`${series.name} is selected`);
        }
}