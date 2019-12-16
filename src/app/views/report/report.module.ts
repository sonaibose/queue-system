import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import {ReportRoutingModule} from './report-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
