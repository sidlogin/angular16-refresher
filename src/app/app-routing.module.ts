import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { 
    path: 'state-management',
    loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
  },
  { 
    path: 'crud-app',
    loadChildren: () => import('./crud-app/crud-app.module').then(m => m.CrudAppModule)
  },
  {
    path: 'http-api',
    loadChildren: () => import('./http-api/http-api.module').then(m => m.HttpApiModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
