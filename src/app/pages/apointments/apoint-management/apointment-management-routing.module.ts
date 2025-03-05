import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApointmentListComponent } from './components/apointment-list/apointment-list.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "apointment-list",
    pathMatch: "full",
  },
  {
    path: "apointment-list",
    component: ApointmentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApointmentManagementRoutingModule { }
