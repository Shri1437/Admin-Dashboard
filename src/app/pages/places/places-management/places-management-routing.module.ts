import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesListComponent } from './components/places-list/places-list.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "places",
    pathMatch: "full",
  },
  {
    path: "places",
    component: PlacesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesManagementRoutingModule { }
