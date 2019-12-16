import {Component, OnInit} from '@angular/core';
import {ButtonPanel} from '../../../shared/models/buttons-panel.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  leftButtons: ButtonPanel[] = [];
  rightButtons: ButtonPanel[] = [];

  constructor() {
  }

  ngOnInit() {

    this.constructButtonPanel();
  }

  private constructButtonPanel() {
    this.leftButtons.push({name: 'services', code: 'services', selected: true});
    this.leftButtons.push({name: 'queues', code: 'queues', selected: false});
    this.leftButtons.push({name: 'working hours', code: 'workinghours', selected: false});
    this.leftButtons.push({name: 'forms', code: 'forms', selected: false});

    this.rightButtons.push({name: 'bulk service update', code: 'bulkserviceupdate'});
    this.rightButtons.push({name: 'add service', code: 'addservice'});
  }

  onPanelButtonClic($event: ButtonPanel) {
    console.log('$event - ', $event);
    $event.selected = !$event.selected;
  }
}
