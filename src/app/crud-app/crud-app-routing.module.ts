import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app.component';

const routes: Routes = [
  { path: '', component: CrudAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAppRoutingModule { }
