import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent
  },
  { path: '', component: DefaultComponent },
  { path: 'places-management', loadChildren: () => import('./places/places-management/places-management.module').then(m => m.PlacesManagementModule) },
  { path: 'user-management', loadChildren: () => import('./user/user-management/user-management.module').then(m => m.UserManagementModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
