import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgSelectModule } from "@ng-select/ng-select";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ProviderList } from "./places-management-provider-registrar";
import { PlacesListComponent } from "./components/places-list/places-list.component";
import { PlacesManagementRoutingModule } from "./places-management-routing.module";
import { NgxPaginationModule } from 'ngx-pagination';
import { AddPlacesComponent } from './components/add-places/add-places.component';
@NgModule({
  declarations: [PlacesListComponent, AddPlacesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    UIModule,
    TabsModule,
    NgxPaginationModule,
    PlacesManagementRoutingModule,
    NgSelectModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [ProviderList],
})
export class PlacesManagementModule {}
