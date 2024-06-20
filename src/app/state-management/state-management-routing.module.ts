import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateManagementComponent } from './state-management.component';

const routes: Routes = [
  { path: '', component: StateManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateManagementRoutingModule { }
