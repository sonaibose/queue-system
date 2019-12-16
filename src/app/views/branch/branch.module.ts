import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesComponent } from './branches/branches.component';
import {BranchRoutingModule} from './branch-routing.module';


@NgModule({
  declarations: [BranchesComponent],
  imports: [
    CommonModule,
    BranchRoutingModule
  ]
})
export class BranchModule { }
