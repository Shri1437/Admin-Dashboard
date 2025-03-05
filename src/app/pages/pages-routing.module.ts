import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent
  },
  { path: '', component: DefaultComponent },
  { path: 'apoint-management', loadChildren: () => import('./apointments/apoint-management/apointment-management.module').then(m => m.ApointmentManagementModule) },
  { path: 'user-management', loadChildren: () => import('./user/user-management/user-management.module').then(m => m.UserManagementModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
