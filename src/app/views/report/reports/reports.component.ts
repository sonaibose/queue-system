import {Component, OnInit} from '@angular/core';
import {ButtonPanel} from '../../../shared/models/buttons-panel.model';


interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  leftButtons: ButtonPanel[] = [];
  rightButtons: ButtonPanel[] = [];

  cities1: any[];
  selectedCities1 = [];
  companyName: any;

  constructor() {
    this.cities1 = [
      {label: 'New Yorkfdsfsdfsdfsd', value: {id: 1, name: 'New York fsdfs fsdfs ', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'Londonfsdfsd', value: {id: 3, name: 'London fsfs ', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbulfsdf ', code: 'IST'}},
      {label: 'Istanbul', value: {id: 8, name: 'Istanbulfsdf ', code: 'IST'}},
      {label: 'Istanbul', value: {id: 9, name: 'Istanbulfsdf ', code: 'IST'}},
      {label: 'Istanbul', value: {id: 10, name: 'Istanbulfsdf ', code: 'IST'}},
      {label: 'Istanbul', value: {id: 11, name: 'Istanbulfsdf ', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}},
      {label: 'Paris', value: {id: 6, name: 'Paris1', code: 'PRS1'}},
      {label: 'Paris', value: {id: 7, name: 'Paris2', code: 'PRS2'}}
    ];
  }

  ngOnInit() {

    this.constructButtonPanel();
  }

  private constructButtonPanel() {
    this.leftButtons.push({name: 'Overview', code: 'overview', selected: true});
    this.leftButtons.push({name: 'Analytics', code: 'analytics', selected: false});
    this.leftButtons.push({name: 'Users', code: 'users', selected: false});
    this.leftButtons.push({name: 'Stats', code: 'stats', selected: false});
    this.leftButtons.push({name: 'Live (beta)', code: 'live', selected: false});
    this.leftButtons.push({name: 'Tickets', code: 'tickets', selected: false});
    //
    // this.rightButtons.push({name: 'bulk service update', code: 'bulkserviceupdate'});
    // this.rightButtons.push({name: 'add service', code: 'addservice'});
  }

  onPanelButtonClic($event: ButtonPanel) {
    console.log('$event - ', $event);
    $event.selected = !$event.selected;
  }

  onclick() {
    console.log(this.selectedCities1);
  }
}
