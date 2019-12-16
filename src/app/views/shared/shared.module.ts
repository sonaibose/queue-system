import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonPanelComponent} from './button-panel/button-panel.component';
import {PrimengModule} from './primeng/primeng.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ButtonPanelComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimengModule
  ],
  exports: [
    FormsModule,
    ButtonPanelComponent,
    PrimengModule
  ]
})
export class SharedModule {
}
