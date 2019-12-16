import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonPanel} from '../../../shared/models/buttons-panel.model';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent implements OnInit {

  @Input() leftButtons: ButtonPanel[];
  @Input() rightButtons: ButtonPanel[];
  @Output() buttonAction = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    console.log('left -but ', this.leftButtons);
  }

  emitButtonCode(buttonVal: ButtonPanel) {
    this.buttonAction.emit(buttonVal);
  }

}
